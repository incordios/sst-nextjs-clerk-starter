import { StackContext, NextjsSite } from "sst/constructs";

export function Default({ stack }: StackContext) {
  const site = new NextjsSite(stack, "site", {
    path: "packages/web",
    environment: {
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: "", // TODO: put your public key here
    },
  });
  stack.addOutputs({
    SiteUrl: site.url,
  });
}
