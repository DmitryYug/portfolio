import React from "react";
import {ReactProjects} from "./ReactProjects";
import {HtmlProjects} from "./HtmlProjects";
import {VueProjects} from "./VueProjects";


export const AllProjects = () => {

    return (
        <>
          <VueProjects/>
          <ReactProjects/>
          <HtmlProjects/>
        </>
    )
}