// This file defines the class periods and final exam days.

courseInfo.classPeriods = [
	{
		topic: new TripleTopic("Lecture 1: Introduction, Primitive Java", "lectures/lecture01.html","Lecture 2: Objects/References, Constructors, JUnit", "lectures/lecture02.html", "Lecture 3: JUnit, Arrays", "lectures/lecture03.html"),
		reading: "1.1&ndash;1.6 <br> 2.1&ndash;2.3 <br> 3.1&ndash;3.9",
		lab: new TripleNumberedLab(1, "Dog Years", 2, "Coins class", 3, "Arrays")
	},
	{
		topic: new DoubleTopic("Lecture 4: File I/O, Exceptions", "lectures/lecture04.html","Lecture 5: Exceptions", "lectures/lecture05.html"),
		reading: "2.5&ndash;2.6",
		lab: new DoubleNumberedLab(4, "Text File I/O", 5, "Exceptions")
	},
	{
		topic: new Topic("Lecture 6: GUIs", "lectures/lecture06.html"),
		lab: new NumberedLab(6, "GUIs")
	},
	{
		topic: new DoubleTopic("Lecture 7: ArrayList, Inheritance", "lectures/lecture07.html", "Lecture 8: Inheritance (continued)", "lectures/lecture08.html"),
		reading: "4.1&ndash;4.2 <br> 4.3&ndash;4.4",
		lab: new DoubleNumberedLab(7, "Inheritance and Polymorphism", 8, "Inheriting Fields and Methods")
	},
	{
		topic: new Topic("Lecture 9: Type casts, instanceof, Object class, Interfaces", "lectures/lecture09.html"),
		lab: new NumberedLab(9, "Comparable, Sorting")
	},
	{
		topic: new Topic("Lecture 10: Generic methods and classes", "lectures/lecture10.html"),
		reading: "4.5&ndash;4.7",
		lab: new NumberedLab(10, "Using Generic Containers and Algorithms")
	},
	{
		topic: new Topic("** Exam 1", "")
	},
	{
		topic: new Topic("Lecture 11: Generic methods, functors", "lectures/lecture11.html"),
		reading: "4.8",
		lab: new NumberedLab(11, "Functors")
	},
	{
		topic: new DoubleTopic("Lecture 12: Analysis of Algorithms", "lectures/lecture12.html", "Lecture 13: Big-O", "lectures/lecture13.html"),
		reading: "5.1&ndash;5.3 <br> 5.4&ndash;5.8",
		lab: new DoubleNumberedLab(12, "Benchmarking ArrayList", 13, "Big-O")
	},
	{
		topic: new Topic("Lecture 14: Collections, Iterators", "lectures/lecture14.html"),
		reading: "6.1-6.3",
		lab: new NumberedLab(14, "Iterators, Interleaving")
	},
	{
		topic: new Topic("Lecture 15: Generic Algorithms", "lectures/lecture15.html"),
		reading: "6.4",
		lab: new NumberedLab(15, "Generic Algorithms")
	},
	{
		topic: new DoubleTopic("Lecture 16: Lists", "lectures/lecture16.html", "** Exam 2",""),
		reading: "6.5",
		lab: new NumberedLab(16, "List Reversal")
	},
	{
		topic: new TripleTopic("Lecture 17: Parallel Programming with Threads", "lectures/lecture17.html", "Lecture 18: Stacks and Queues", "lectures/lecture18.html", "Lecture 19: Sets and Maps", "lectures/lecture19.html"),
		reading: "6.6 <br> 6.7-6.8",
		lab: new TripleNumberedLab(17, "Parallel Estimation of π", 18, "Palindromes", 19, "Word Count")
	},
	{
		topic: new Topic("Lecture 20: Recursion", "lectures/lecture20.html"),
		reading: "7.1, 7.3",
		lab: new NumberedLab(20, "Recursion")
	},
	{
		topic: new Topic("Lecture 21: Proof by Induction", "lectures/lecture21.html"),
		reading: "7.2",
		lab: new NumberedLabNoFile(21, "Proof by Induction")
	},
	{
		topic: new Topic("Lecture 22: Memoization and Dynamic Programming", "lectures/lecture22.html"),
		reading: "7.6",
		lab: new NumberedLab(22, "Binomial Coefficient")
	},
	{
		topic: new Topic("Lecture 23: Merge and Quick Sort", "lectures/lecture23.html"),
		reading: "8.5-8.6",
		lab: new Lab("No lab", "")
	},
	{
		topic: new Topic("** Exam 3", "")
	},
	{
		topic: new DoubleTopic("Lecture 24: Relational Databases and SQL", "lectures/lecture24.html", "Lecture 25: Database Applications and JDBC", "lectures/lecture25.html"),
		lab: new DoubleNumberedLab(23, "Relational Databases and SQL", 24, "JDBC")
	},
	{
		topic: new Topic("** Final Exam", "")
	},
];

// The following is for the college-scheduled final exam.
// It is not used if final is on last day of class"
courseInfo.finalExamDates = [
//Tuesday 5/14	10:15 AM - 12:15 PM
	new FinalExamDay("101", new Date("05/14/2019 10:15:00")),
//Tuesday 5/14	12:45 PM - 2:45 PM
	new FinalExamDay("102", new Date("05/14/2019 12:45:00"))
];

// vim:ts=2:
