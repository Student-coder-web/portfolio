const Footer = () => (
  <footer className="border-t border-border/30 py-8">
    <div className="container mx-auto px-4 text-center">
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Ajay Kumbhar. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
