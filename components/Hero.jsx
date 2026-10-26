import Link from "next/link";

export default function Hero({
  title,
  subtitle = "",
  crumb = "",
  image = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800",
  children = null,
}) {
  return (
    <section
      className="bg-cover bg-center py-24 text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(28,25,23,.78), rgba(28,25,23,.78)), url('${image}')`,
      }}
    >
      <div className="mx-auto max-w-3xl px-5">
        {crumb && (
          <p className="animate-fade-up mb-4 text-xs uppercase tracking-[0.3em] text-amber-500">
            <Link href="/" className="hover:underline">Home</Link> &nbsp;/&nbsp; {crumb}
          </p>
        )}
        <h1
          className="animate-fade-up mb-4 font-serif text-4xl md:text-6xl"
          style={{ animationDelay: "120ms" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="animate-fade-up text-stone-300" style={{ animationDelay: "240ms" }}>
            {subtitle}
          </p>
        )}
        {children && (
          <div className="animate-fade-up mt-8" style={{ animationDelay: "360ms" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}