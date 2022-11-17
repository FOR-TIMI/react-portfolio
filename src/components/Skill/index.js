import React from "react";
import { TagSphere } from "react-tag-sphere";

function Skill() {

    const myTags = [
        'JavaScript', 'CSS', 'HTML',
         'C++', 'React',
        'Python', 'Java', 'git',
        'Node.js', 'MongoDB',
        'Express', 'MySQL', 'jQuery',
        'tailwind', 'GraphQl', 'REST',
    ];


    return (
        <TagSphere
        style={{
          color: "blue",
          fontWeight: "bold",
          fontSize: "1.2rem",
          fontFamily: "monospace",
        }}
        blur={false}
        tags={myTags}
      />
    )
}

export default Skill