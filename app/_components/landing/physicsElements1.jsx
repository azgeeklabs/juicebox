"use client";
import { useEffect } from "react";
// import * as THREE from 'three';
import Matter from "matter-js";

// Utility functions
function clamp(min, val, max) {
  if (val < min) {
    return min;
  } else if (val > max) {
    return max;
  } else {
    return val;
  }
  // return Math.max(min, Math.min(val, max));
}

function vwToPx(vw) {
  return (vw * window.innerWidth) / 100;
}

function remToPx(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function calcVw(px) {
  const vw = pxToVw(px);
  return vwToPx(vw);
}

function pxToVw(px) {
  const viewportWidthPx = 1800; // Fixed viewport width in pixels
  const vw = (px / viewportWidthPx) * 100;
  return parseFloat(vw.toFixed(3));
}

const min = 10; // min value in pixels
const max = 1000; // max value in pixels

const MatterComponent = () => {
  useEffect(() => {
    const Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse;

    // create an engine
    const engine = Engine.create(),
      world = engine.world;

    // adjust the gravity
    engine.world.gravity.y = 0.375; // reduce this value to slow down the falling speed

    // create a renderer
    const matterContainer1 = document.getElementById("matter-container1");
    const render = Render.create({
      element: matterContainer1,
      engine: engine,
      options: {
        width: matterContainer1.clientWidth,
        height: matterContainer1.clientHeight,
        pixelRatio: 1,
        background: "transparent",
        wireframes: false,
      },
    });

    // create bounds
    const ground1 = Bodies.rectangle(
      0,
      0,
      matterContainer1.clientWidth,
      clamp(min, calcVw(5) + remToPx(0.1), max),
      {
        isStatic: true,
        render: {
          fillStyle: "transparent",
          strokeStyle: "transparent",
        },
      }
    );

    // Calculate position for bottom left corner
    const xPosition =
      ground1.position.x + (ground1.bounds.max.x - ground1.bounds.min.x) / 2;
    const yPosition =
      matterContainer1.clientHeight -
      (ground1.bounds.max.y - ground1.bounds.min.y) / 2;

    // Update ground1 object with new position
    Matter.Body.setPosition(ground1, { x: xPosition, y: yPosition });

    const wallLeft = Bodies.rectangle(
      0,
      0,
      clamp(min, calcVw(5) + remToPx(0.1), max),
      matterContainer1.clientHeight,
      {
        isStatic: true,
        render: {
          fillStyle: "transparent",
          strokeStyle: "transparent",
        },
      }
    );

    // Calculate position for bottom left corner
    const wallLeftxPosition =
      wallLeft.position.x + (wallLeft.bounds.max.x - wallLeft.bounds.min.x) / 2;
    const wallLeftyPosition =
      matterContainer1.clientHeight -
      (wallLeft.bounds.max.y - wallLeft.bounds.min.y) / 2;

    // Update wallLeft object with new position
    Matter.Body.setPosition(wallLeft, {
      x: wallLeftxPosition,
      y: wallLeftyPosition,
    });

    const wallRight = Bodies.rectangle(
      0,
      0,
      clamp(min, calcVw(5) + remToPx(0.1), max),
      matterContainer1.clientHeight,
      {
        isStatic: true,
        render: {
          fillStyle: "transparent",
          strokeStyle: "transparent",
        },
      }
    );

    // Calculate position for bottom left corner
    const wallRightxPosition =
      matterContainer1.clientWidth -
      (wallRight.bounds.max.x - wallRight.bounds.min.x) / 2;
    const wallRightyPosition =
      matterContainer1.clientHeight -
      (wallRight.bounds.max.y - wallRight.bounds.min.y) / 2;

    // Update wallRight object with new position
    Matter.Body.setPosition(wallRight, {
      x: wallRightxPosition,
      y: wallRightyPosition,
    });

    const radius = 0;
    // create objects

    const ele1 = Bodies.rectangle(
      clamp(min, calcVw(170) + remToPx(0.1), max),
      clamp(min, calcVw(-140) + remToPx(0.1), max),
      clamp(min, calcVw(157) + remToPx(0.1), max),
      clamp(min, calcVw(49) + remToPx(0.1), max),
      {
        chamfer: { radius: radius },
        frictionAir: 0.0125,

        render: {
          sprite: {
            texture: "/1.png",
            xScale: clamp(min, calcVw(157) + remToPx(0.1), max) / 157,
            yScale: clamp(min, calcVw(49) + remToPx(0.1), max) / 49,
          },
        },
      }
    );
    const ele2 = Bodies.rectangle(
      clamp(min, calcVw(420) + remToPx(0.1), max),
      clamp(min, calcVw(0) + remToPx(0.1), max),
      clamp(min, calcVw(387) + remToPx(0.1), max),
      clamp(min, calcVw(49) + remToPx(0.1), max),
      {
        chamfer: { radius: radius },
        frictionAir: 0.0125,

        render: {
          sprite: {
            texture: "/2.png",
            xScale: clamp(min, calcVw(387) + remToPx(0.1), max) / 387,
            yScale: clamp(min, calcVw(49) + remToPx(0.1), max) / 49,
          },
        },
      }
    );
    const ele3 = Bodies.rectangle(
      clamp(min, calcVw(320) + remToPx(0.1), max),
      clamp(min, calcVw(60) + remToPx(0.1), max),
      clamp(min, calcVw(197) + remToPx(0.1), max),
      clamp(min, calcVw(49) + remToPx(0.1), max),
      {
        chamfer: { radius: radius },
        frictionAir: 0.0125,
        // id: "instagramBody",
        render: {
          sprite: {
            texture: "/3.png",
            xScale: clamp(min, calcVw(197) + remToPx(0.1), max) / 197,
            yScale: clamp(min, calcVw(49) + remToPx(0.1), max) / 49,
          },
        },
      }
    );
    const ele4 = Bodies.rectangle(
      clamp(min, calcVw(380) + remToPx(0.1), max),
      clamp(min, calcVw(120) + remToPx(0.1), max),
      clamp(min, calcVw(316) + remToPx(0.1), max),
      clamp(min, calcVw(49) + remToPx(0.1), max),
      {
        chamfer: { radius: radius },
        frictionAir: 0.0125,
        render: {
          sprite: {
            texture: "/4.png",
            xScale: clamp(min, calcVw(316) + remToPx(0.1), max) / 316,
            yScale: clamp(min, calcVw(49) + remToPx(0.1), max) / 49,
          },
        },
      }
    );
    const ele5 = Bodies.rectangle(
      clamp(min, calcVw(470) + remToPx(0.1), max),
      clamp(min, calcVw(240) + remToPx(0.1), max),
      clamp(min, calcVw(122) + remToPx(0.1), max),
      clamp(min, calcVw(49) + remToPx(0.1), max),
      {
        chamfer: { radius: radius },
        frictionAir: 0.0125,

        render: {
          sprite: {
            texture: "/5.png",
            xScale: clamp(min, calcVw(122) + remToPx(0.1), max) / 122,
            yScale: clamp(min, calcVw(49) + remToPx(0.1), max) / 49,
          },
        },
      }
    );
    const ele6 = Bodies.rectangle(
      clamp(min, calcVw(630) + remToPx(0.1), max),
      clamp(min, calcVw(280) + remToPx(0.1), max),
      clamp(min, calcVw(328) + remToPx(0.1), max),
      clamp(min, calcVw(49) + remToPx(0.1), max),
      {
        chamfer: { radius: radius },
        frictionAir: 0.0125,

        render: {
          sprite: {
            texture: "/6.png",
            xScale: clamp(min, calcVw(328) + remToPx(0.1), max) / 328,
            yScale: clamp(min, calcVw(49) + remToPx(0.1), max) / 49,
          },
        },
      }
    );
    const ele7 = Bodies.rectangle(
      clamp(min, calcVw(310) + remToPx(0.1), max),
      clamp(min, calcVw(280) + remToPx(0.1), max),
      clamp(min, calcVw(103) + remToPx(0.1), max),
      clamp(min, calcVw(49) + remToPx(0.1), max),
      {
        chamfer: { radius: radius },
        frictionAir: 0.0125,

        render: {
          sprite: {
            texture: "/7.png",
            xScale: clamp(min, calcVw(103) + remToPx(0.1), max) / 103,
            yScale: clamp(min, calcVw(49) + remToPx(0.1), max) / 49,
          },
        },
      }
    );
    const ele8 = Bodies.rectangle(
      clamp(min, calcVw(610) + remToPx(0.1), max),
      clamp(min, calcVw(280) + remToPx(0.1), max),
      clamp(min, calcVw(253) + remToPx(0.1), max),
      clamp(min, calcVw(49) + remToPx(0.1), max),
      {
        chamfer: { radius: radius },
        frictionAir: 0.0125,

        render: {
          sprite: {
            texture: "/8.png",
            xScale: clamp(min, calcVw(253) + remToPx(0.1), max) / 253,
            yScale: clamp(min, calcVw(49) + remToPx(0.1), max) / 49,
          },
        },
      }
    );

    // add all of the bodies to the world
    World.add(engine.world, [
      ground1,
      wallLeft,
      wallRight,
      ele1,
      ele2,
      ele3,
      ele4,
      ele5,
      ele6,
      ele7,
      ele8,
    ]);

    // add mouse control
    // Create a mouse
    const mouse = Mouse.create(render.canvas);

    // Create a mouse constraint
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    // Add the mouse constraint to the world
    World.add(engine.world, mouseConstraint);

    // Keep the mouse in sync with rendering
    render.mouse = mouse;

    // run the engine
    Engine.run(engine);
    // Runner.run(Runner.create(), engine);

    // run the renderer
    Render.run(render);

    // Cleanup on component unmount
    return () => {
      Render.stop(render);
      Engine.clear(engine);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
      const canvas = document.querySelector("#matter-container1 canvas");
      if (canvas) canvas.remove();
    };
  }, []);

  return null;
};

export default MatterComponent;
