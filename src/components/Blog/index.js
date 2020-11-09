import React, { Component } from "react";

// CSS
// import "./Blog.css";

const BLOG_JSON = [
  {
    title: "Detect Changed Files with git", 
    author: "David Walsh",    
    content: "There are numerous reasons to want to know which files have been added or modified in a git repository, one of which is your text editor highlighting those files. Another use case is running tasks against only files which are presently changed, like lint or other validation routines."
  },
  {
    title: "Limit Promise Concurrency with pool",
    author: "Jean Phillips",
    content: "Methods like Promise.all, Promise.allSettled, Promise.race, and the rest are really excellent for managing multiple Promises, allowing for our apps to embrace async and performance. There are times, however, that limiting the number of concurrent operations may be useful, like rate limiting or simply not wanting to put a server under massive stress."
  }
];

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      entryTitle: "",
      entryAuthor: "",
      entryContent: ""
    };

    this.handlerNewEntryChange = this.handlerNewEntryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        entries: BLOG_JSON,
      });    
    }, 1);
  }

  renderEntries() {
    return this.state.entries.map(({ title, author, content }) => {
      return (
        <div>
          <li>{title}</li>
          <li>{author}</li>
          <li>{content}</li>
        </div>       
      );
    });
  }

  handlerNewEntryChange({ target: { value, name} }) {
    this.setState({
      [name]: value,
    });
  } 

  handleSubmit(event) {
    event.preventDefault();
    let { entries, entryTitle, entryAuthor, entryContent } = this.state;
    console.log(this.state)
    const newEntry = {
      title: entryTitle,
      author: entryAuthor,
      content: entryContent
    };
    entries.push(newEntry);
    this.setState({
      entries,
      entryTitle: "",
      entryAuthor: "",
      entryContent: ""
    });
  }

  render() {
    const { entries, entryTitle, entryAuthor, entryContent } = this.state;
    return (
      <div className="card border-primary mb-3">
        {entries.length ? (
          <ul>{this.renderEntries()}</ul>
        ) : (
          <h1>No hay entries</h1>
        )}
        <form onSubmit={this.handleSubmit}>
          Title:{" "}
          <input
            value={entryTitle}
            onChange={this.handlerNewEntryChange}
            name="entryTitle"
          />
          Author:{" "}
          <input
            value={entryAuthor}
            onChange={this.handlerNewEntryChange}
            name="entryAuthor"
          />
          Content:{" "}
          <input 
            value={entryContent}
            onChange={this.handlerNewEntryChange}
            name="entryContent"
          />
          <button className="btn btn-primary" type="submit">Crear artículo en el Blog</button>
        </form>
      </div>
    );
  }

}
export default Blog;

/*
1. ABSTRAER el objeto POST de un blog
2. Crear un JSON con varios objetos POST
3. Crear un componente que renderize esos POST's a modo de Cards (como un blog)
4. Añadir un formulario a ese componente para poder añadir POST
Happy Hacking!
 */



