// Union Types
function formatId(id: string | number): string {
  if (typeof id === "number") {
    return "ID: " + id * 2;
  }

  return "ID: " + id.toUpperCase();
}

console.log(formatId("flg789"));
