import React from 'react';
import HeaderMessage from './HeaderMessage';
import Message from './Message';
import Reactions from './Reactions';
import ListeCommentaires from './ListeCommentaires';

class Actualite extends React.Component {
  render() {
    const { auteur, commentaires, datePublication, message, reactions } = this.props.actualite;

    return (
      <div className="Actualite">
        <HeaderMessage auteur={auteur} datePublication={datePublication} />
        <Message message={message} />
        <Reactions reactions={reactions} />
        <ListeCommentaires commentaires={commentaires} />
      </div>
    );
  }
}

export default Actualite;
