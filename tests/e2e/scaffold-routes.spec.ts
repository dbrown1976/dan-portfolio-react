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

    await expect(page.getByText("Project Home Template")).toBeVisible();
    await expect(page.getByText("Selected segment")).toBeVisible();
    await expect(page.getByText("Overview")).toBeVisible();
    await expect(page.getByText("Route kind")).toBeVisible();
    await expect(page.getByText("projectDefault")).toBeVisible();
  });

  test("project subsection route resolves selected segment and subsection state", async ({
    page
  }) => {
    await expectRouteToRender(page, projectRoutes[1]);

    await expect(page.getByText("Project Work Template")).toBeVisible();
    await expect(page.getByText("Understanding the problem")).toBeVisible();
    await expect(page.getByText("Selected route state")).toBeVisible();
    await expect(page.getByText("Discovery")).toBeVisible();
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

test.describe("scaffold accessibility smoke tests", () => {
  for (const route of routes) {
    test(`${route.path} has no obvious axe violations`, async ({ page }) => {
      await expectRouteToRender(page, route);

      const results = await new AxeBuilder({ page }).analyze();

      expect(results.violations).toEqual([]);
    });
  }
});
