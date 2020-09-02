export default [
	{
		title: 'Understanding Prototypal inheritance',
		category: 'JavaScript',
		duration: '10 min',
		introduction:
			"Prototypes are a way for object's to share properties and methods. Before ES2015 which saw the introduction of the class syntax, JavaScript relied heavily upon constructor functions to create objects and the prototype chain or __proto__ for inheritance. We are going to take a look a look at how this works and how it compares to classical inheritance ",
		body: ``,
	},
	{
		title: 'Object oriented programming in TypeScript',
		category: 'TypeScript',
		duration: '20 min',
		introduction:
			"TypeScript compliments JavaScript's object oriented programming style. It adds more robust features to javaScript classes such as abstract classes, generics, interfaces, public, private, protected and readonly class modifiers and so on. We are going to take a look at a classic example by creating a simple program that explains the applications of this concepts",
		body: '',
	},
	{
		title: 'Make Change',
		category: 'Trivia',
		duration: '10min',
		introduction:
			"So here's a fun question to work on. Given a list of possible coins in cents, and an amount (in cents) n, return the minimum number of coins needed to create the amount n. If it is not possible to create the amount using the given coin denomination, return None.Here's an example and some starter code: " +
			'function make_change(coins, n): ' +
			' # Fill this in. ' +
			'console.log(make_change([1, 5, 10, 25], 36))' +
			'# 3 coins (25 + 10 + 1)',
	},
	{
		title: 'Rectangle intersection',
		category: 'Trivia',
		duration: '10min',
		introduction: `
        Given two rectangles, find their area of intersection.

        Here's some starter code and a starter example:
        
        class Rectangle(){
            constructor(min_x=0, min_y=0, max_x=0, max_y=0) {
                this.min_x = min_x
                this.min_y = min_y
                this.max_x = max_x
                this.max_y = max_y
            }
        }
            
        
        function intersection_area(rect1, rect2) {
            # Fill this in.
        }
         
        
        const rect1 = Rectangle(0, 0, 3, 2)
        const rect2 = Rectangle(1, 1, 3, 3)     

        intersection_area(rect1, rect2) //2
        `,
	},
	{
		title: 'Streamroller',
		category: 'Trivia',
		duration: '10min',
		introduction: `
        Here's a fun question to work on: Flatten a nested array while accounting for varying levels of nesting.

        function steamrollArray(arr) {
            //fill this
        }
        
        steamrollArray([1, [2], [3, [[4]]]]); // [1,2,3,4]
        steamrollArray([1, {}, [3, [6, [4]]]]) // [1, {}, 3, 6, 4]
        `,
	},
	{
		title: 'My first meme 😂😂',
		category: 'Humour',
		duration: '1min',
		body: 'image',
	},
	{
		title: 'Find the pythagorean triplets',
		category: 'Trivia',
		duration: '5min',
		introduction: `
        Given a list of numbers, find if there exists a pythagorean triplet in that list and return it. A pythagorean triplet is 3 variables a, b, c where a^2 + b^2 = c^2

        Example:
        Input: [3, 5, 12, 5, 13]
        Output: True
        Here, 5^2 + 12^2 = 13^2.

        const findPythagoreanTriplets = (nums) => {
            // Fill this in.

        }

        findPythagoreanTriplets([3, 12, 5, 13]) //[12, 5 ]
              
        `,
	},
	{
		title: '',
		category: '',
		duration: '15min',
		introduction: `
        You are given a hash table where the key is a course code, and the value is a list of all the course codes that are prerequisites for the key. Return a valid ordering in which we can complete the courses. If no such ordering exists, return NULL.

        Example:
        {
        'CSC300': ['CSC100', 'CSC200'], 
        'CSC200': ['CSC100'], 
        'CSC100': []
        }

        This input should return the order that we need to take these courses:
        ['CSC100', 'CSC200', 'CSCS300']

        Here's your starting point:

        const courses_to_take = (course_to_prereqs) => {

            // Fill this in.
        }

        courses = {
        'CSC300': ['CSC100', 'CSC200'], 
        'CSC200': ['CSC100'], 
        'CSC100': []
        }
        courses_to_take(courses)
        // ['CSC100', 'CSC200', 'CSC300']
        `,
	},
	{
		title: 'Handling file uploads',
		category: ['Javascript', 'Firebase Cloud storage'],
		duration: '20min',
		introduction: `While creating web and mobile apps, file uploads is often a key feature in our app's design. We need to store some unstructured data from our users such as images for their profiles, or sometimes even files and documents. Today, we will be going through cloud storage as a great way to store unstructured data, and how we can handle file uploads from a react client (or any client for that matter) to a Node.js app, and store the data to Firebase Cloud storage, modify, update and even delete it. We will go over cloud storage and how ot works on a high level so that you can leverage its ease and flexibility in to handle your file upload needs`,
	},
	{
		title: 'Rotating a 2d array',
		category: 'trivia',
		duration: '15min',
		introduction: `
        You are given a two dimensional array containing arrays of integers representing a matrix and a single string of either 'right' or 'left' as arguments. Rotate the matrix by 90 degrees in the direction specified by the argument string and return the resulting 2D array.

        Example #1
        solve([
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12]
        ], "right")
        > [
         [9, 5, 1],
         [10, 6, 2],
         [11, 7, 3],
         [12, 8, 4]
        ]
        Example #2
        solve([
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12]
        ], "left")
        > [
         [4,8,12], 
         [3,7,11],
         [2,6,10],
         [1,5,9]
        ]
        `,
	},
];
