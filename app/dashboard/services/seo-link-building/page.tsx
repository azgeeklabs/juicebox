"use client";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import SEOLinkBuildingTable from "@/app/_components/Services/SEOLinkBuilding/SEOLinkBuildingTable";
import React from "react";

export default function page() {
  return (
    <NextPrevNav nextLink="/dashboard/services/seo-link-building/article-selection">
      <SEOLinkBuildingTable />
    </NextPrevNav>
  );
}
