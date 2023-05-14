"use client";

import { FC } from "react";
import SimpleBar from "simplebar-react";

import { nodejs, python } from "@/helpers/docs";
import Code from "@/ui/Code";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/Tabs";

const DocumentationTabs: FC = () => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs">
        <SimpleBar forceVisible="y">
          <Code animated code={nodejs} language="tsx" show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="python">
        <SimpleBar forceVisible="y">
          <Code animated code={python} language="tsx" show />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
