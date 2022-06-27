import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment ({ content, onDeleteComment }) { 
    function handleDeleteComment (){ /*O compartilhamento de função entre componentes ocorre aqui, já que a função deletecomment está declarada no componente Post.jsx */
        console.log('deletar')
        onDeleteComment (content);
    }


    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src = "https://avatars.githubusercontent.com/u/57668277?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Arthur Carvalho</strong>
                            <time title="23 de junho às 11:02" dateTime="2022-06-23 11:02">Publicado há 1hr</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">  
                            <Trash size={24} />
                        </button> 
                    </header>

                    <p>{content}</p>
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