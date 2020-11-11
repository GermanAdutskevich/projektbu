// import React, {useState} from 'react';
// import './list-page.scss';
// import Header from "../../components/header/header";
// import Footer from "../../components/footer/footer";
//
// const TableHeader = (props) => {
//
//     const headings = [
//         {
//             displayName: 'Aktywa/Pasywa',
//             objectName: 'name'
//         },
//         {
//             displayName: 'Dział',
//             objectName: 'section'
//         },
//         {
//             displayName: 'Kategoria',
//             objectName: 'category'
//         },
//         {
//             displayName: 'Cena',
//             objectName: 'price'
//         },
//         {
//             displayName: 'Waluta',
//             objectName: 'currency'
//         },
//         {
//             displayName: 'Numer dokumentu',
//             objectName: 'number'
//         },
//         {
//             displayName: 'Opis',
//             objectName: 'description'
//         }
//     ];
//
//     const handleClick = heading => () => {
//         const newSortState = [];
//         const numeric = ['price', 'number', 'quantity'];
//         if (numeric.includes(heading)) {
//             newSortState.push('numeric');
//         } else {
//             newSortState.push('alphabetic');
//         }
//         newSortState.push(heading);
//         // props.sort.direction === 'desc' ? newSortState.push('asc') : newSortState.push('desc');
//         // better version - default desc when clicking on new column
//         if (props.sort.category === heading) {
//             props.sort.direction === 'desc' ? newSortState.push('asc') : newSortState.push('desc');
//         } else {
//             newSortState.push('desc');
//         }
//         props.updateSortState(...newSortState);
//     };
//
//
// // export default function ListPage() {
// //     const [newTodo, setNewTodo] = useState('');
// //     const [todos, setTodos] = useState([
// //         {
// //             name: 'Kupić mleko',
// //             isDone: false,
// //         },
// //         {
// //             name: 'Kupić mleko 2',
// //             isDone: false,
// //         },
// //         {
// //             name: 'Kupić mleko 3',
// //             isDone: false,
// //         },
// //     ]);
// //     const handleAddTodo = (e) => {
// //         e.preventDefault();
// //         setTodos(prevTodos => [
// //             ...prevTodos,
// //             {
// //                 name: newTodo,
// //                 isDone: false,
// //             },
// //         ]);
// //         setNewTodo('');
// //     }
// //     const handleClickTodo = (name) => {
// //         setTodos(prevTodos => {
// //             const prevTodosCopy = [...prevTodos];
// //             const index = prevTodosCopy.findIndex((todo) => todo.name === name);
// //             prevTodosCopy[index].isDone = !prevTodosCopy[index].isDone;
// //             console.log({ prevTodosCopy });
// //             return prevTodosCopy;
// //         });
// //     }
// //     return (
// //         <>
// //         <Header/>
// //             <div className="toDoList">
// //                 <form className="header">
// //                     <h2>Twoja lista zadań</h2>
// //                     <input
// //                         type="text"
// //                         placeholder="np. Zrobić zakupy"
// //                         value={newTodo}
// //                         onChange={(e) => setNewTodo(e.target.value)}
// //                     />
// //                     <button className="btn-add" onClick={handleAddTodo}>Dodaj</button>
// //                 </form>
// //                 <ul>
// //                     {todos.map((todo) => {
// //                         return (
// //                             <li
// //                                 key={todo.name}
// //                                 className={todo.isDone ? 'done' : ''}
// //                                 onClick={() => handleClickTodo(todo.name)}
// //                             >
// //                                 {todo.name}
// //                             </li>
// //                         );
// //                     })}
// //                 </ul>
// //             </div>
// //     <Footer/>
// //     </>
// //
// //     );
// // };