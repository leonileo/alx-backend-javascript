import ClassRoom from './0-classroom';

const r1 = new ClassRoom(19);
const r2 = new ClassRoom(20);
const r3 = new ClassRoom(34);

export default function initializeRooms() {
  return [
    r1,
    r2,
    r3,
  ];
}
