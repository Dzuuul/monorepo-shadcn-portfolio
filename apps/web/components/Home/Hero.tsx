import { Button } from "@workspace/ui/components/button";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@workspace/ui/components/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@workspace/ui/components/card";
import { Label } from "@workspace/ui/components/label";
import { Input } from "@workspace/ui/components/input";

import mocks, { ProjectTabItem } from "@workspace/mocks";

const projectTab: ProjectTabItem[] = mocks.projectMenu;

export default function Hero() {
  return (
    <>
      <Tabs defaultValue={projectTab[0]?.value}>
        <TabsList>
          {projectTab.map((item) => (
            <TabsTrigger key={item.id} value={item.value}>
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {projectTab.map((item) => (
          <TabsContent value={item.value} key={item.id}>
            <Card>
              <CardHeader>
                <CardTitle>{item.label}</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you&apos;re
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-name">Name</Label>
                  <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-username">Username</Label>
                  <Input id="tabs-demo-username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
