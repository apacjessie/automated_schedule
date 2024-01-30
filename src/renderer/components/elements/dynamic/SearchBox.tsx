import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const SearchBox = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        `border-gray-500 border focus-within:border-accent flex gap-2 py-1.5 px-2 rounded-md
      2xl:w-64 w-52`,
        className,
      )}
    >
      <Search width={18} />
      <input
        type="text"
        placeholder="Search..."
        className="outline-none w-full"
      />
    </div>
  );
};

SearchBox.defaultProps = {
  className: '',
};

export default SearchBox;
