import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Denis Haruk</p>
          <p>
            Contact us:{" "}
            <a href="mailto:notehub-public.goit.study">notehub-public.goit.study</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
