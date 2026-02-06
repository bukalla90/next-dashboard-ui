import "dotenv/config";
// import the singleton client
import { prisma } from "@/lib/prisma";  

// import enums from generated client
import { BloodType, UserSex, Day } from "@/generated/prisma";

async function main() {
  console.log("🌱 Seeding database...");
  console.log("DATABASE_URL =", process.env.DATABASE_URL);

  /* =======================
     ADMIN
  ======================= */
  await prisma.admin.createMany({
    data: [
      { username: "admin1", password: "password123" },
      { username: "admin2", password: "password123" },
    ],
  });

  /* =======================
     GRADE
  ======================= */
  for (let level = 1; level <= 6; level++) {
    await prisma.grade.create({ data: { level } });
  }

  const grades = await prisma.grade.findMany();

  /* =======================
     SUBJECT
  ======================= */
  await prisma.subject.createMany({
    data: [
      { name: "Mathematics" },
      { name: "Science" },
      { name: "English" },
      { name: "History" },
      { name: "Geography" },
      { name: "Physics" },
      { name: "Chemistry" },
      { name: "Biology" },
      { name: "Computer Science" },
      { name: "Art" },
    ],
  });

  const subjectList = await prisma.subject.findMany();

  /* =======================
     TEACHER
  ======================= */
  const teachers = [];
  for (let i = 1; i <= 15; i++) {
    const teacher = await prisma.teacher.create({
      data: {
        username: `teacher${i}`,
        password: "password123",
        name: `TName${i}`,
        surname: `TSurname${i}`,
        email: `teacher${i}@example.com`,
        phone: `123-456-78${i}`,
        address: `Teacher Address ${i}`,
        bloodType: BloodType.A_POS,
        sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
        subjects: {
          connect: [{ id: subjectList[i % subjectList.length].id }],
        },
      },
    });
    teachers.push(teacher);
  }

  /* =======================
     CLASS
  ======================= */
  const classes = [];
  for (let i = 0; i < grades.length; i++) {
    const cls = await prisma.class.create({
      data: {
        name: `${grades[i].level}A`,
        gradeId: grades[i].id,
        supervisorId: teachers[i].id,
        capacity: 20,
      },
    });
    classes.push(cls);
  }

  /* =======================
     PARENT
  ======================= */
  const parents = [];
  for (let i = 1; i <= 25; i++) {
    const parent = await prisma.parent.create({
      data: {
        username: `parent${i}`,
        password: "password123",
        name: `PName${i}`,
        surname: `PSurname${i}`,
        email: `parent${i}@example.com`,
        phone: `123-555-${i}`,
        address: `Parent Address ${i}`,
      },
    });
    parents.push(parent);
  }

  /* =======================
     STUDENT
  ======================= */
  const students = [];
  for (let i = 1; i <= 50; i++) {
    const student = await prisma.student.create({
      data: {
        username: `student${i}`,
        password: "password123",
        name: `SName${i}`,
        surname: `SSurname${i}`,
        email: `student${i}@example.com`,
        phone: `999-000-${i}`,
        address: `Student Address ${i}`,
        bloodType: BloodType.A_POS,
        sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
        parentId: parents[i % parents.length].id,
        classId: classes[i % classes.length].id,
        gradeId: classes[i % classes.length].gradeId,
      },
    });
    students.push(student);
  }

  /* =======================
     LESSON
  ======================= */
  const days = Object.values(Day);
  const lessons = [];

  for (let i = 0; i < 30; i++) {
    const lesson = await prisma.lesson.create({
      data: {
        name: `Lesson ${i + 1}`,
        day: days[i % days.length],
        subjectId: subjectList[i % subjectList.length].id,
        teacherId: teachers[i % teachers.length].id,
        classId: classes[i % classes.length].id,
      },
    });
    lessons.push(lesson);
  }

  /* =======================
     EXAM
  ======================= */
  for (let i = 0; i < 10; i++) {
    await prisma.exam.create({
      data: {
        title: `Exam ${i + 1}`,
        lessonId: lessons[i].id,
        startTime: new Date(),
        endTime: new Date(),
      },
    });
  }

  /* =======================
     ASSIGNMENT
  ======================= */
  for (let i = 0; i < 10; i++) {
    await prisma.assignment.create({
      data: {
        title: `Assignment ${i + 1}`,
        lessonId: lessons[i].id,
        startTime: new Date(),
        dueTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });
  }

  /* =======================
     ATTENDANCE
  ======================= */
  for (let i = 0; i < 50; i++) {
    await prisma.attendance.create({
      data: {
        studentId: students[i].id,
        lessonId: lessons[i % lessons.length].id,
        date: new Date(),
        present: Math.random() > 0.2,
      },
    });
  }

  console.log("✅ Seeding completed successfully!");
}

// Run the seeding
main()
  .catch((err) => {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
