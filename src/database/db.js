import Dexie from "dexie";

export const db = new Dexie("eDataBase");
db.version(1).stores({
  bookkeeping: "++id, money, monyType, bookType, bookTime",
});
