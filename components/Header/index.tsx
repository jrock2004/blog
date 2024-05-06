import NavBar from '@/components/NavBar';

export default function Header() {
  return (
    <header className="flex items-center py-6">
      <div>
        <h1 className="text-3xl">John Costanzo</h1>
      </div>
      <NavBar />
    </header>
  );
}
