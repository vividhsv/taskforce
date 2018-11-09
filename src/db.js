import Dexie from "dexie";

export const db = new Dexie("taskforce");

db.version(1).stores({
  tasks: "id++,text,completed,priorityId,created_on",
  priority: "id++,level",
  projects: "id++,name"
});

db.on("populate", function() {
  db.priority.bulkAdd([
    {
      level: "Critical"
    },
    {
      level: "Major"
    },
    {
      level: "Minor"
    },
    {
      level: "Trivial"
    }
  ]);
  db.projects.bulkAdd([
    {
      name: "Default"
    }
  ]);
});

db.open();
