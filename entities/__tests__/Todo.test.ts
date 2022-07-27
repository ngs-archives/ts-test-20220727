import { Todo } from "../Todo";
import { connectDatabase, disconnectDatabase } from "../../database";

describe("Todo", () => {
  beforeAll(async () => {
    await connectDatabase();
  });

  afterAll(async () => {
    await disconnectDatabase();
  });

  it("inserts", async () => {
    const todo = new Todo();
    todo.subject = "Task 1";
    await todo.save();

    expect(todo.id).toBeGreaterThan(0);
    expect(todo.subject).toEqual("Task 1");

    expect(todo.isDone()).toBe(false);

    todo.done();
    expect(todo.isDone()).toBe(true);
  });
});
