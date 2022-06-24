import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment () {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src = "https://avatars.githubusercontent.com/u/57668277?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div classname={styles.authorAndTime}>
                            <strong>Arthur Carvalho</strong>
                            <time title="23 de junho às 11:02" dateTime="2022-06-23 11:02">Publicado há 1hr</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom, parabéns</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}