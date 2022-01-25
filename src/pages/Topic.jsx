import React from "react";
import { useParams } from "react-router-dom";

function Topic() {
    let {topic}= useParams()

    return (
        <div>
            <h4>{topic}</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum amet veritatis necessitatibus neque molestiae autem, porro earum illo quia nobis quo. Laudantium tempora cum recusandae inventore molestias, ea deleniti vel!
            Eum dolores illo vitae distinctio, voluptatum deleniti facere mollitia placeat suscipit in sit laboriosam officia labore. Inventore ipsam beatae facere autem harum deserunt id magni, nobis odio. Quam, harum illo.
            Rem laborum illo sequi quia alias mollitia magnam totam, quas maxime aperiam id explicabo laudantium velit beatae ullam esse nam. Unde culpa quam ut vitae rerum consectetur pariatur nisi vero.</p>
        </div>
    );
}

export default Topic;
