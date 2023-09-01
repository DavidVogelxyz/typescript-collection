# Primeagen's Algorithms course

Started the course on 2023 August 14, Monday. Finished the course on 2023 August 18, Friday.

## Table of contents

- [Big O time complexity](#big-o-time-complexity)
- [Data structure - arrays](#data-structure-arrays)
- [Linear Search and kata setup](#linear-search-and-kata-setup)
- [Binary Search Algorithm](#binary-search-algorithm)
- [Two Crystal Balls problem](#two-crystal-balls-problem)
- [Bubble Sort](#bubble-sort)
- [BRAND NEW DATA STRUCTURE ALERT](#brand-new-data-structure-alert)
- [Queue](#queue)
- [Stack](#stack)
- [Arrays vs linked lists](#arrays-vs-linked-lists)
- [ArrayList](#arraylist)
- [Array buffers](#array-buffers)
- [Recursion](#recursion)
- [Quicksort](#quicksort)
- [No more lists!](#no-more-lists!)
- [TREES](#trees)
- [Tree traversal](#tree-traversal)
    - [Depth First Traversal](#depth-first-traversal)
    - [Breadth First Traversal](#breadth-first-traversal)
- [Binary Search Tree](#binary-search-tree)
- [Heap](#heap)
    - [MinHeap](#minheap)
    - [MaxHeap](#maxheap)
- [Retrieval tree](#retrieval-tree)
- [GRAPHS](#graphs)
- [Dijkstra's shortest path](#dijkstras-shortest-path)
- [MAPS](#maps)
- [LRUs](#lrus)

## Big O time complexity

Big O
: aka "runtime"
- algo resource utilization in terms of data INPUT into function
- "O of N" is a linear relationship based on input
- growth with respect to input

Example:

```
function sum_char_codes(n: string): number {
	let sum = 0;
	for (let i = 0; i < n.length; ++i) {
		sum += n.charCodeAt(i);
	}

	return sum;
}
```

- wut?
- this is _______?
	- answer: "O of N"
	- Primeagen says "look for the loops; understand their behavior"

Next example:

```
function sum_char_codes(n: string): number {
	let sum = 0;
	for (let i = 0; i < n.length; ++i) {
		sum += n.charCodeAt(i);
	}

	for (let i = 0; i < n.length; ++i) {
		sum += n.charCodeAt(i);
	}

	return sum;
}
```

- this is _______?
	- answer: "O of N"
	- it looks like "2N", and it technically is
		- BUT, this is just like "infinity math"
		- 2N is equivalent to N
		- any coefficient multiplied by N, is N
		- HOWEVER, N^2 > N

### Least operations to most:

- O(1) - linear
	- constant
	- no slople
- O(log(n)) - linear
- O(n) - linear
- O(n * log(n)) - quadratic
- O(n^2) - quadratic
- O(2^n) - approaches infinity
- O(n!) - approaches infinity

### Let's put it another way:

- O of N
	- when 'n' is a 'for' loop that goes through every character in the string
		- for (let i = 0; i < n.length; ++i) { sum += n.charCodeAt(i);}
	- note: can do this twice ('2n')
- O(N^2)
	- when 'n' is a 'for' loop that, for every char in string, goes through every char in string
		- for (let i = 0; i < n.length; ++i) { for (let j = 0; j < n.length; ++j) {sum += n.charCodeAt(i);}
	- note: the addition of a new variable, 'j'
		- this is literally the addition of a new dimension aka DEGREE OF FREEDOM
		- this is all starting to click
			- that's why the computation grows so rapidly
			- have to integrate data over an area instead of a line; a volume from an area, etc
- O(N^3)
	- working with matrices
	- two dimension of data, over time (3rd dimension)
- O(n * log(n))
	- quicksort
- O(log(n))
	- binary search tree

## Data structure - arrays

is `const a = []` an array?
- I said no. most said yes.
- it is not an array!
- but why though?

array
: continguous (unbreaking) memory space
- memory is interpreted as what it's told to be by the computer
- a simple contiguous memory space

buffer
:

HOLD UP
- Zero bytes = 1 bit = 2 possibilities (2^1)
- 0.5 bytes = 4 bits = 16 possibilities (2^4)
	- a singular hex character encodes for 16 possibilities
- One byte = 8 bits = 256 possibilities (2^8)
	- what I'm use to seeing with hex, aka 2 characters
	- '45' = '2d'
		- 2d = 0010 1101 = 45
	- the reason why hex is cool, is becase we can represent 8 bits of binary with 2 characters
		- way easier to type and read and understand
- Two bytes = 16 bits = 65536 possibilities (2^16)
	- pokemon game data is 16 bit registry
	- this means that 4 hex characters encoded the data
		- ex. '2d 3e'
- Four bytes = 32 bits = ~ 4 billion possibilties
	- IPv4 address
	- an ip address is four bytes
		- 00000000.00000000.00000000.00000000
	- an IPv4 address can be represented in hex
		- would take 8 hex characters
			- '04 f3 d1 32'
		- and this is how you get to IPv6!

SO
- ArrayBuffer of 6 bytes is a hex code like so
	- <00 00 00 00 00 00>
	- each '0' could be 16 possibilities (0-9,a-f)
		- 32 = 2 * 16
	- in binary, 2 possibilities for every bit
		- 16 bit = 32 / 2
		-

notes
- you can't just grow an array, because the next values in memory may be a different array, etc
	- if you need variable sizing, use a list and not an array
- insertion isn't "inserting," it's an overwrite
	- just like how renaming isn't renaming; it's moving to a different location (& name) & deleting
- deleting isn't deleting; it's overwriting with zeroes
	- 'null' is a named way to indicate that a value is not set to anything

big O of getting data out of an array
- it's O(1) = constant, linear, no slope
	- it's nearly instant because the function just takes it's measurement interval (x bits/bytes) and then moves forward a certain value
- `a + width = offset`
	- no variable = O(1)

nice!

## Linear Search and kata setup

remember free body diagrams (FBDs) from physics

always start with a visualization of the problem:
- conceptually grasp how the data is going to be manipulated

starting with the most simple problem of data:
- we have some data, and we want to find data in it
- a search function

### Linear search

find a needle in a haystack

search(arr,v) is the same as indexof

what is the big O of linear search?
- dave guess: approaches O(log(n)), but worst case would be O(n)

Primeagen's tool for learning:

```
git clone git@github.com:ThePrimeagen/kata-machine.git
cd kata-machine
yarn install
yarn generate
vim $(yarn -s day) # or navigate to day1 folder
```

"gives you a simple way to do Katas"
- ?

"to the typescripts!"

Primeagen suggests NOT returning inside loops

## Binary Search Algorithm

is it ordered?
- if it is, there are advantages (& disadvantages)

search(arr,lo,hi)

do{
m = lo + ( 0.5 * (hi-lo) )
m = offset + midpoint
v = arr[m]
if v = n
return true;
else if v > m
lo = m + 1
else
hi = m
}
while (lo < hi)
return false // -1

[lo,hi)

## Two Crystal Balls problem

two balls, can't break infinite

the most boring correct way is to drop at 1, then 2, 3, until it breaks
- linear walk (O(N))

the faster way involves using the first one as a signal of breakage
- but, anything that's a coefficient of N will just be O(N)
- we need to make it logarithmic somehow
	- what if you jump by sqrt(N)
		- that would make the problem O(sqrt(N))
			- aka O(log(N))

## Bubble Sort

what is the mathemathical representation of, "I know this array is sorted?"

x sub i < = x sub i + 1

if not sorted, this principle will not (necessarily) hold true

simple bubble sort algo:
: you go to the +1 spot and say, hey, is 'x' larger than 'x + 1'. if yes, swap places
- after first iteration, the final place will hold the largest value
	- no longer need to sort that place
	- after every 'n' iterations, the 'n' from last place will no longer need sorting

[1, 3, 7, 4, 2]

[1, 3, 4, 2, | 7]

[1, 3, 2, | 4, 7]

[1, 2, | 3, 4, 7]

sorted!

### What is the runtime (Big O)?

the pattern:
- first iteration is 'n' ops
- second is 'n - 1' ops
- third is 'n - 2' ops

Gauss adding numbers:
- sum 1 through 100
- that's a pain, isn't that a factorial?
- simplify:
	- 1... 100
		- look at 1 and 100. sums to 101
		- what's left? 2... 99
			- also 101
			- goes down to 50 and 51, also 101
- after simplifying, it's 50 * 101
	- 50 = 0.5 * n
	- 101 = n + 1
- so, the runtime is:
	- 0.5 * n * (n + 1)

the runtime is O(n^2 + n)

therefore, it's O(n^2)

### Implementing bubble sort

[			]
0			n

go up to, but not including, n - 1
i, i +1,

for i... n
for j... n-1-i
if (arr[i] > arr[j])
swap(i,j)

8 = j position
3 = j + 1 position

tmp = 8
j now equals what j + 1 equals (3)
j + 1 now equals temp (8)

EOF

## BRAND NEW DATA STRUCTURE ALERT

`const a = []` is **NOT** an array
- so, what is this?

Linked list!

a node that contains some data, and an instruction to the next node
contains a value, and a reference to another value
daisy chain

simply linked vs doubly linked
- simply = transitive (a links to b, which also links to c)
	- remove b, and a doesn't know to link to c
- doubly = links go forwards **and** backwards

using a doubly linked list
- insertion and deletion should be 4 operations, not varying with input
- so, O(1), constant time

[a, b, c, ...]
- insert 'f' between 'a' and 'b'
- change the following nexts and prevs
	- a -> f
	- f -> b
	- f <- b
	- a <- f

***in linked lists, there are no indices (no index!)***

[a, b, c, ...]
- delete b

start with B. since start with B, can pull these values
- B.next = C
- B.prev = A

set the surround values to have new references
- A.next = B.next = C
- C.prev = B.prev = A

set the original references to null
- B.prev = B.next = null

return C.value

**Linked lists are awesome and foundational**
- all linked lists are graphs, aka all linked lists are trees

## Queue

aka FIFO

a queue is a specific implementation of a linked list
- add to tail & remove from head
- enqueue, deque, & peek

what's the opposite of a queue?

## Stack

aka LIFO

the opposite of a queue is a stack!
- add to head, instead of tail
	- remove from tail
- push, pop, & peek

## Arrays vs linked lists

when to use one vs the other

array lookup is faster [O(1)] than linked list [O(N)]
- this is because array values are indexed
- the trade-off is that array memory is pre-allocated, and encumbered even while not in use

no such thing as 'binary search' in a linked list
- think of the data structure -- that's because the computer has to walk each reference to find an item
	- therefore, by definition, it has to be a linear search
- what is the best way to traverse a linked list?
	- linear search

linked lists are better for push/pop operations, at the head and tail
- a likely but unconfirmed example is 'git'

arrays are better for lookups or random access
- RANDOM ACCESS MEMORY

is it possible to get speed of array with the benefits of a linked list?
- yes (?!)

## ArrayList

am I wrong to think that you're just linking a bunch of arrays?

arr[A] arr[B] arr[C] arr[D]

what stops you from linking the last item in arr[A] to the first item in arr[B]?

then you can do lookups with arr[A] and arr[B], but you can use link list between A & B?

still unsure if this was a dumb guess

---

use array as base structure instead of a node, and then push and pop on top

idx = index

get(idx)
- if idx >= length
	- throw...

push(val: T):
- what's big O? what are we doing?
	- use your length
	- write it to the array
	- increment the array
- constant!
- what happens when try to push beyond array?
- can create new array, maybe of longer length
- then, memcopy & handle push operation

pop(): T | undefined
- use length - 1
- grab out the value
- decrement the array

array lists are really good for stack-like operations (lifo; push & pop)
- but, very bad for queue like operations (fifo; enqueue & deque)

enqueue():
- an o(n) like operation
- involves shifting over every item so a new item can be added at head

deque():
- an o(n) like operation
- involves shifting every item

so, which is better: an arraylist or a linkedlist?
- obviously, it depends?
- YES! it depends!
- when you want stack operations?
	- arraylist
	- random access as constant time
- when you want queue operations?
	- linkedlist

PRIME JUST SAID (in interviews, as interviewer) he cares less whether you can implement
- cares more if you understand fundamentally what's going on, because it's going to impact how you implement ANYTHING
- you can always learn a new language, harder to learn a new perspective through which to view everything

## Array buffers

aka ring buffers

### To round out this LIST section

`const a = []`

what is it?

I think it's an arraylist with no data

slice = memcopy

## Recursion

when using recursion as a tool
1. start with a SOLID BASE CASE
2. then, recurse

in our example:

why should we stop recursing?
- well, we WENT OFF THE MAP
	- at this point, stop recursing = stop function = stop program
	- yeah, we want to stop the loop if we walk off map
- we land on a wall tile
	- again, obvious -- stop the loop and go back
- we arrive at the end
	- this was the most obvious to me
		- yeah, stop loop when win condition
		- but I did not consider all the other reasons you'd want to stop
- already visited that space
	- obviously, don't want to get stuck in a loop going back and forth using a tile you already went to

move everything into the base case instead of trying to set all these null conditions

always use a simple for loop when you can

recursion is for situations where a simple for loop won't work

## Quicksort

a version of 'divide and conquer'

pivot point

pick end point as pivot (for round 1)

lo & hi

reminiscent of binary search
- however, both inclusive

runtime:
o(n(log(n)))

## No more lists!

trees, in some sense, are lists

we're not really done, but we're kinda done

all programming eventually leads to trees

### Time to implement the linked lists

### Doubly Linked List

## TREES

starts from a single point, and then goes on down

has 0 to many children

filesystems are trees

a pyramid scheme is a tree (KEK)

node<T>
value: T
children: []

height:
start at root
longest chain from root to the farthest away child

### Definitions

root
: most parent node

height
: longest parth from root to most child node

binary tree
: tree with **AT MOST** two children, and at least 0 children

general tree
: tree with 0 or more children

binary search tree
: tree with **AT MOST** two children, in which the nodes have a specific order

leaves
: node with no children, aka **TERMINUS**

balanced
: tree where any given node's left and right children have the same height

branching factor
: the amount of children a tree has

## Tree Traversal

going to want to use recursion
- which means, we need to create a good base case

### Depth First Traversal

```
                1
      I---------I---------I
      2                   3
I-----I-----I       I-----I-----I
4           5       6           7
```

visitNode()

recurse()
- top down
	- 1, 2, 4, 5, 3, 6, 7
- go downward from root

recurseR()
- bottom up
	- 4, 2, 5, 1, 6, 3, 7
- start with the leftmost child and work back up the tree
- go up one parent, recuse the rest of that parent's child; repeat;

is it noteworthy that both recursive methods end with the same item?
- the "rightmost child"

visitNode()

post order traversal
- child focused (KEK)
	- 4, 5, 2, 6, 7, 3, 1
- start at 1, but you don't visit it; go to 2, don't visit yet; etc.
	- "first you have to get to all the children" - prime
- in this one, the root is the last item in the list/array

post order traversal SHAPE
- left to right through children, then up one directory

```
  root
     \
 x    ^
 \     \
>->  >-->
```

what is the runtime?
- remember: it depends on the input
- what is the input?
	- guess: the whole Node<>
	- answer: the whole tree
		- is the whole tree synonymous with Node<>?
			- negative :(
		- the tree is a collection of the nodes
			- I think I meant the set of nodes, but I did misspeak
		- FIRST TRY though!
- my guess is that it's O(N)
	- it can't possibly be O(1), that would be crazy
	- operations grow linear with input
		- so, O(N)
	- if the tree doubles in size, operations double
		- that's O(N)
			- a line
	- if it quadrupled?
		- that's O(n^2)
			- an area
	- if 8-fold increase?
		- that's O(n^3)
			- a volume
- **all traversals are O(N)**

guess at the base case:
- break recursion if:
	- a node has no children
	- already seen

already seen is NOT part of the base case
- !!!
- because, traversal function already uses stack-like operations to keep ordering for us

I said: find a child that has no more children
he said: when we are a child that doesn't exist
- does the distinction matter?
	- YES!
- in the case of recurse() from before:
	- 1, 2, 4, 5, 3, 6, 7
	- my perspective would have us stop recursion at 4
	- in his, we stop AFTER 4, when we try to go further and break
- fascinating...

these three traversals are known as depth-first traversals
- priority of continuing deeper and then working back
- what is the implicit data structure of a depth-first traversal?
	- huh?
	- is the answer "linked list"?
		- it's pushing and it's popping
			- so, it's a stack...
				- which is a linked list!
	- the most correct answer was **stack**

### Breadth First Traversal

```
                1
      I---------I---------I
      2                   3
I-----I-----I       I-----I-----I
4           5       6           7
```

breadth first
- also a linked list, but a **queue** instead of a stack
- "tree level" kind of visiting
	- start with root, go one level down, read left to right, go down another level
- breadth first is the traversal that would give the printout of [1, 2, 3, 4, 5, 6, 7]

what is the runtime of breadth first?
- remember: it depends on the input
- what is the input?
	- guess: the whole Node<>
	- answer: unsure
- my guess is that it's O(N)
	- it is
		- but, not if you use a js array
		- it becomes o(n^2)
		- because a js array = arrayList
		- think about it: for every level of a binary tree, there's twice as many children
			- so, 1, 2, 4, 8, 16
				- powers of 2
			- yes, the coefficient is 2, but it's also a binary, so it's 2*n = 2*2 = n^2
				- yeah, it's not n^2
				- but actually 2^n
		- Primeagen's way:
			- in a binary tree
			- the last level is going to have **HALF** of the total nodes in the tree
			- ex. 3 levels
				- bottom level has 4 of 7 nodes
				- actually, more than half
				- any new level means you'll have to do 'n' amount of work, 'n' times
					- so, n^2

Primeagen is not sure that it's possible to do a recursive BFS
- for recursion, just use a stack
- a queue just isn't as practical, but maybe it's porrible

### a sweet, delicious practice problem

remember: breadth first does not preserve the shape of the traversal
- but, depth first does preserve the shape of the traversal

## Binary Search Tree

### Depth-first

looks a lot like quicksort
- with pivots and splitting, etc

this is a simplified version of a binary search on an array

### Depth-first find:

find(n, v): boolean
if !n
	r f |
if n.v = v
	r t |
if n.v < v
	return find(n.r, v)
return find(n.l, v)

what is the runtime?
- well, you're comparing two trees
	- so, I'd imagine it's o(n^2) since it's a * b
- wrong!
	- some portion of it is 'log(n)'
	- worst case is o(n)
	- actual answer is o(h)
		- with h = height
			- if the height is large, the height is n
			- for a complete binary tree, h is log(n)
	- ranges depending on balance

### Depth-first insert:

if node.v < value
	if !node.r
	insertion

### Depth-first delete:

case 1) no child
- delete

case 2) one child
- set parent to child

case 3) multiple children

smallest on large side
or
largest on small side

## Heap

aka a priority queue(?)

knowing about heap makes you more hireable

heap
: a binary tree where every child and grand child is smaller(MaxHeap), or larger (MinHeap) than the current node
- when a node is added, the tree must be adjusted
- when a node is deleted, the tree must be adjusted
- there is technically no traversing because of the preceeding two points
- heaps maintain ***weak*** ordering
	- ordered, but not perfectly ordered
	- there *are* rules to be followed

### MinHeap

MinHeap
- the root value must be the smallest value

sort a MinHeap by doing a "bubble up"
- a Michael Bubble up

heapify down
- in a MinHeap, compare against the smaller of the two children
- keep sending the large down until it gets to the bottom
- start at 0 (root)

the children can be found with:
- left:
	- 2 * idx + 1
- right:
	- 2 * idx + 2

parent can be found with:
- 0.5 * (idx - 1)
	- this only works in languages where int/int = int **always**
		- aka a language where the remainder is modulo (%)
		- ex. 6 has children of 13 and 14
			- 13 => 6 % 0; 14 => 6 % 1
	- in javascript (ts), we're going to need to do a floor operation
		- floor out the value to get the parent

### MaxHeap

MaxHeap
- the root value must be the largest value

heapify up
- start at length of array
	- we already know length of array!

what is the runtime of a heap?
- it's an array, and it's just doing lookup and swap
- what is the input?
	- a new value
- the runtime is always o(log(n))
	- because:
		- this is a complete and full tree at all points, and you don't need to traverse the whole tree, even in a worst case situation

## Retrieval tree

synonymous with autocomplete
- also, caching

O(1)
- as we add more and more **nodes** (words), does our lookup time change?
	- no, it based on some finite predetermined amount of length
		- what's the longest english word?
		- technically the height of the tree
			- so, techinically O(H)

## GRAPHS

arguably the hardest, largest, and most difficult part of algorithms

everything that we have done up to this point is essentially a graph
- a hard pill to swallow

Euler
- 7 bridges problem
	- principle: if there is an odd number of connections into any node, it's impossible to do the traversal

### Graph terminology

cycle
: start at Node(x), follow links, end back at Node(x)
- requires 3 nodes to be part of cycle

acyclic
: a graph that contains no cycles

connected
: when every node has a path to ***every other*** node

directed
: when there is a direction to the connections (think: Twitter)
- one way connections, OR connections that are asymmetric
- example of asymmetry is a busy highway during rush hour
	- the backup is generally only in one direction

undirected
: !directed (think Facebook of old)
- can go both ways

weighted
: edges have weights associated (think: maps)

dag
: a Directed, Acyclic Graph

example of a dag:
D <---> A <--- B ---> C <--- D
- 'C' breaks all cycles because it never sends out

node
: a point or vertex on the graph'

edge
: a point betwixt two nodes

### Searching an adjacency matrix

---

## Dijkstra's shortest path

what is the runtime?

## MAPS

load factor
: divide "data points" by amount of storage (data.len / storage.capacity)

key
: value that is hashable, used to look up data

value
: a representation that is associated with a key

collision
: when 2 keys have the same hash and map to the same spot

NB: maps are **array-lists**!!

## LRUs

Least Recently Used

Can be used to evict the LRU item

a linked list
- doubly linked list

retrieval tree?

hash map!

two generics in a hash map
- key
- value

### LRU caching

using / inserting an item = 7x O(1) operations
- take any mapped item:
	- change to undefined, both the prev (1) and next (2)
	- go to the prev item, change its next (3) to what came after the removed
	- go to the next item, change its prev (4) to what came before the removed
- bring mapped item to head by:
	- set item's next to the head (5)
	- set head's prev to the new head (6)
	- set item AS head (7)

deleting / removing an item from the tail = operations
- set tail to second to last
- break link on old tail to new tail
- break link on new tail from old tail

### fin!
