// rooms.tsx
const rooms = {
  straightHallway: {
    name: "Straight Hallway",
    grid: [
      [1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1],
    ],
  },
  rightTurn: {
    name: "Right Turn",
    grid: [
      [1, 1, 0, 0, 0],
      [1, 0, 0, 1, 1],
      [0, 0, 0, 1, 1],
      [1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1],
    ],
  },
  leftTurn: {
    name: "Left Turn",
    grid: [
      [0, 0, 0, 1, 1],
      [1, 1, 0, 0, 1],
      [1, 1, 0, 0, 0],
      [1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1],
    ],
  },
  deadEnd: {
    name: "Dead End",
    grid: [
      [1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1],
    ],
  },
  openRoom: {
    name: "Open Room",
    grid: [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
    ],
  },
  rightHallway: {
    name: "Right Hallway",
    grid: [
      [1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
    ],
  },
  leftHallway: {
    name: "Left Hallway",
    grid: [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
  },
  room1: {
    name: "Room 1",
    grid: [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
    ],
  },
  room2: {
    name: "Room 2",
    grid: [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
    ],
  },
  // Additional rooms
  tIntersection: {
    name: "T Intersection",
    grid: [
      [1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
  },
  rightTIntersection: {
    name: "Right T Intersection",
    grid: [
      [1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1],
      [1, 1, 0, 1, 1],
      [0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
    ],
  },
  leftTIntersection: {
    name: "Left T Intersection",
    grid: [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 1, 1],
      [1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
  },
  rightHallwayTurn: {
    name: "Right Hallway Turn",
    grid: [
      [1, 1, 1, 1, 1],
      [0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
  },
  leftHallwayTurn: {
    name: "Left Hallway Turn",
    grid: [
      [1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
  },
  rightHallwayTIntersection: {
    name: "Right Hallway T Intersection",
    grid: [
      [1, 1, 1, 1, 1],
      [0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1],
    ],
  },
  leftHallwayTIntersection: {
    name: "Left Hallway T Intersection",
    grid: [
      [1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
  },
  crossIntersection: {
    name: "Cross Intersection",
    grid: [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
    ],
  },
  crossIntersectionWithPillars: {
    name: "Cross Intersection With Pillars",
    grid: [
      [1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 1, 0, 1],
    ],
  },
  narrowHallway: {
    name: "Narrow Hallway",
    grid: [
      [1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
  },
  wideHallway: {
    name: "Wide Hallway",
    grid: [
      [1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
    ],
  },
  // Add more rooms...
};

export default rooms;
