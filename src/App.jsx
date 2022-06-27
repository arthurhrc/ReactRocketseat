import { Header } from './components/Header';
import { Post } from './components/Post' ;
// ./ for same location files
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css';
import './global.css';
import { ArrowFatRight, ArrowFatUp } from 'phosphor-react';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/57668277?v=4',
      name: 'Arthur Carvalho',
      role: 'Estagiario'
    },
    content: [
      { type: 'paragraph', content: 'Boa tarde galera' },
      { type: 'paragraph', content: 'Este é o primeiro projeto usando o react! 😁'},
           
    ],
    publishedAt: new Date ('2022-06-24T03:24:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/221582?v=4',
      name: 'Wesley Cota',
      role: 'Professor'
    },
    content: [
      { type: 'paragraph', content: 'Boa tarde galera' },
      { type: 'paragraph', content: 'Este é o primeiro projeto usando o react! 😁'},
           
    ],
    publishedAt: new Date (),
  }
];

export function App() {
  return (
    <div>
      <Header />


    <div className={styles.wrapper}>
      <Sidebar />
      <main>
       {posts.map(posts => {
          return (
            <Post 
              key = {posts.id}
              author={posts.author}
              content={posts.content}
              publishedAt={posts.publishedAt}
            />
          )
        })}
      </main>
    </div>
  </div>
  )
}



