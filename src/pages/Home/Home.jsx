import LeftNav from "../components/LeftNav/LeftNav";
import NoteList from "../components/NoteList/NoteList";
import Editor from "../components/Editor/Editor";
import './Home.scss'
export default function Home() {
    return (
      <div className="home">
        <LeftNav></LeftNav>
        <NoteList></NoteList>
        <Editor></Editor>
        <h2>Home</h2>
      </div>
    );
  }