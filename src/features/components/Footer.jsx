
// Footer containing Company Information and Social Media Links
export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>© {new Date().getFullYear()} Simpl-FY LLC. All rights reserved.</div>

        {/* Social Media Links: NEEDS UPDATING - Replace '#' with actual links */}
        <div className="socials">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="X">x</a>
          <a href="#" aria-label="Email">@</a>
        </div>
      </div>
    </footer>
  );
}
