import React from "react";
import { Collapse } from "antd";
import { accordion } from "../../../../Utils/Constants/InfoForCollapse";

const { Panel } = Collapse;

const Article = () => {
  return (
    <div className="w-full my-[30px]">
      <Collapse size="large">
        {accordion.map((article) => (
          <Panel extra={article.icon} header={article.header} key={article.id}>
            {article.text}
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default Article;
