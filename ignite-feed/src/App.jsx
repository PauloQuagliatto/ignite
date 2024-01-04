import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./globals.css"
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Mokne" content="askldjlksajdklasd" />
          <Post author="Mokne" content="askldjlksajdklasd" />
        </main>
      </div>
    </>
  )
}
