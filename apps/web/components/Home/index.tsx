"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { CroppedElipse } from "../Background/CroppedElipse";
import { Paragraph, Title } from "../Typography";
import Hero from "./Hero";
import { Button } from "@workspace/ui/components/button";
import SubTitle from "../Typography/SubTitle";
import SVGs from "./SVGs";
import Greetings from "./Greetings";
import CardSlider from "./CardSlider";

export function Home() {
  const t = useTranslations("Home");
  return (
    <section id="home" className="scroll-mt-[80px]">
      <CroppedElipse />
      <div className="flex items-start justify-center min-h-svh">
        <div className="flex flex-col items-center justify-center gap-4">
          <Greetings text={t("greeting")} />
          <SubTitle text={t("subTitle")} />
          <Paragraph text={t("content")} />
          <div className="flex gap-2 mb-15">
            <Button variant="outline">{t("downloadButton")}</Button>
            <Button>{t("exploreButton")}</Button>
          </div>
          <Hero />
        </div>
      </div>
      <SVGs />
      <CardSlider />
    </section>
  );
}

export { default as Hero } from "./Hero";
