import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

type SmokeRoute = {
  path: string;
  heading: string;
};

const staticRoutes: readonly SmokeRoute[] = [
  { path: "/", heading: "Portfolio foundation" },
  { path: "/work", heading: "Work" },
  { path: "/about", heading: "About" },
  { path: "/cv", heading: "CV" },
  { path: "/contact", heading: "Contact" }
];

const projectRoutes: readonly SmokeRoute[] = [
  {
    path: "/work/next-generation-authoring",
    heading: "Next Generation Authoring"
  },
  {
    path: "/work/next-generation-authoring/understanding-the-problem/discovery",
    heading: "Next Generation Authoring"
  }
];

const routes = [...staticRoutes, ...projectRoutes] as const;

const activeNavigationRoutes = [
  { path: "/", activeLabel: "Home" },
  { path: "/work", activeLabel: "Work" },
  { path: "/work/next-generation-authoring", activeLabel: "Work" },
  { path: "/cv", activeLabel: "CV" },
  { path: "/about", activeLabel: "About" },
  { path: "/contact", activeLabel: "Contact" }
] as const;

async function expectRouteToRender(page: Page, route: SmokeRoute) {
  const response = await page.goto(route.path);

  expect(response?.ok()).toBe(true);
  await expect(page.getByRole("main")).toBeVisible();
  await expect(page.getByRole("heading", { level: 1, name: route.heading })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
  await expect(page.getByText("Route not found")).toHaveCount(0);
}

test.describe("scaffold route smoke tests", () => {
  for (const route of routes) {
    test(`${route.path} renders`, async ({ page }) => {
      await expectRouteToRender(page, route);
    });
  }

  test("project default route resolves to the default segment", async ({ page }) => {
    await expectRouteToRender(page, projectRoutes[0]);

    await expect(page.getByRole("heading", { level: 2, name: "Route state" })).toBeVisible();
    await expect(page.getByText("Selected segment")).toBeVisible();
    await expect(page.getByRole("definition").filter({ hasText: /^Overview$/ })).toBeVisible();
    await expect(page.getByText("Route kind")).toBeVisible();
    await expect(page.getByText("projectDefault")).toBeVisible();
  });

  test("project subsection route resolves selected segment and subsection state", async ({
    page
  }) => {
    await expectRouteToRender(page, projectRoutes[1]);

    await expect(page.getByRole("heading", { level: 2, name: "Route state" })).toBeVisible();
    await expect(
      page.getByRole("definition").filter({ hasText: /^Understanding the problem$/ })
    ).toBeVisible();
    await expect(page.getByText("Selected route state")).toBeVisible();
    await expect(page.getByRole("definition").filter({ hasText: /^Discovery$/ })).toBeVisible();
    await expect(page.getByText("subsection")).toBeVisible();
  });
});

test.describe("primary navigation", () => {
  test("uses the intended link order", async ({ page }) => {
    await page.goto("/work");

    const navigation = page.getByRole("navigation", { name: "Primary navigation" });
    await expect(navigation.getByRole("link")).toHaveText([
      "Home",
      "Work",
      "CV",
      "About",
      "Contact"
    ]);
  });

  for (const route of activeNavigationRoutes) {
    test(`${route.path} marks only ${route.activeLabel} as active`, async ({ page }) => {
      await page.goto(route.path);

      const navigation = page.getByRole("navigation", { name: "Primary navigation" });
      const activeLinks = navigation.locator('[aria-current="page"]');

      await expect(activeLinks).toHaveCount(1);
      await expect(activeLinks).toHaveText(route.activeLabel);
    });
  }
});

test.describe("project section navigation", () => {
  const projectPath = "/work/next-generation-authoring";

  test("renders a compact top-level navigation on the project overview", async ({ page }) => {
    await page.goto(projectPath);

    const sections = page.getByRole("navigation", {
      name: "Next Generation Authoring sections"
    });

    await expect(sections.getByRole("link")).toHaveText([
      "Overview",
      "Understanding the problem",
      "Building the system",
      "Improvements & rollout"
    ]);
    await expect(sections.locator('[aria-current="page"]')).toHaveText("Overview");
    await expect(page.getByRole("navigation", { name: "Overview pages" })).toHaveCount(0);
  });

  test("shows only the selected section's child pages", async ({ page }) => {
    await page.goto(`${projectPath}/building-the-system/building-the-system`);

    const sections = page.getByRole("navigation", {
      name: "Next Generation Authoring sections"
    });
    const subsectionPages = page.getByRole("navigation", {
      name: "Building the system pages"
    });

    await expect(sections.getByRole("link", { name: "Building the system" })).toHaveAttribute(
      "data-selected",
      "true"
    );
    await expect(sections.locator('[aria-current="page"]')).toHaveCount(0);
    await expect(subsectionPages.getByRole("link")).toHaveText([
      "Building the system",
      "Patterns",
      "Beta"
    ]);
    await expect(subsectionPages.locator('[aria-current="page"]')).toHaveText(
      "Building the system"
    );
  });

  test("marks only the actual child page as current", async ({ page }) => {
    await page.goto(`${projectPath}/understanding-the-problem/discovery`);

    const sections = page.getByRole("navigation", {
      name: "Next Generation Authoring sections"
    });
    const subsectionPages = page.getByRole("navigation", {
      name: "Understanding the problem pages"
    });

    await expect(sections.getByRole("link", { name: "Understanding the problem" })).toHaveAttribute(
      "data-selected",
      "true"
    );
    await expect(sections.locator('[aria-current="page"]')).toHaveCount(0);
    await expect(subsectionPages.locator('[aria-current="page"]')).toHaveText("Discovery");
  });

  test("links to every NGA section and child route", async ({ page }) => {
    await page.goto(projectPath);

    const sectionLinks = page
      .getByRole("navigation", { name: "Next Generation Authoring sections" })
      .getByRole("link");

    expect(
      await sectionLinks.evaluateAll((links) => links.map((link) => link.getAttribute("href")))
    ).toEqual([
      projectPath,
      `${projectPath}/understanding-the-problem/understanding`,
      `${projectPath}/building-the-system/building-the-system`,
      `${projectPath}/improvements-rollout/improvements`
    ]);

    const childRoutes = [
      {
        section: "understanding-the-problem",
        label: "Understanding the problem",
        slugs: ["understanding", "discovery", "direction"]
      },
      {
        section: "building-the-system",
        label: "Building the system",
        slugs: ["building-the-system", "patterns", "beta"]
      },
      {
        section: "improvements-rollout",
        label: "Improvements & rollout",
        slugs: ["improvements", "rollout", "reflections"]
      }
    ] as const;

    for (const childRoute of childRoutes) {
      await page.goto(`${projectPath}/${childRoute.section}/${childRoute.slugs[0]}`);

      const childLinks = page
        .getByRole("navigation", { name: `${childRoute.label} pages` })
        .getByRole("link");

      expect(
        await childLinks.evaluateAll((links) => links.map((link) => link.getAttribute("href")))
      ).toEqual(childRoute.slugs.map((slug) => `${projectPath}/${childRoute.section}/${slug}`));
    }

    const childPaths = childRoutes.flatMap((childRoute) =>
      childRoute.slugs.map((slug) => `${projectPath}/${childRoute.section}/${slug}`)
    );

    for (const childPath of childPaths) {
      const response = await page.goto(childPath);

      expect(response?.ok()).toBe(true);
      await expect(
        page.getByRole("heading", { level: 1, name: "Next Generation Authoring" })
      ).toBeVisible();
    }
  });

  test("does not enable the navigation for projects that have not opted in", async ({ page }) => {
    await page.goto("/work/design-system");

    await expect(page.getByRole("main").getByRole("navigation")).toHaveCount(0);
  });
});

test.describe("scaffold accessibility smoke tests", () => {
  for (const route of routes) {
    test(`${route.path} has no obvious axe violations`, async ({ page }) => {
      await expectRouteToRender(page, route);

      const results = await new AxeBuilder({ page }).analyze();

      expect(results.violations).toEqual([]);
    });
  }
});
