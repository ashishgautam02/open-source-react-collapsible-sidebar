NPM : https://www.npmjs.com/package/@ashish_gautam/react-collapsible-sidebar

# React Collapsible Sidebar

A beautiful, customizable collapsible sidebar component for React applications with TypeScript support.

## Features

- 🎨 Customizable styling via props
- 📱 Responsive design with mobile support
- 🎯 Full TypeScript support with exported types
- 🔄 Smooth collapse/expand animations
- 🎭 Icon support via lucide-react
- 🏷️ Badge support for navigation items
- 💡 Smart tooltips when sidebar is collapsed
- ♿ Accessible with proper ARIA attributes

## Installation

```bash
npm install @ashish_gautam/react-collapsible-sidebar lucide-react
```

Note: `lucide-react` is required for icons.

## Basic Usage

```tsx
import React, { useState } from 'react';
import { CollapsibleSidebar } from '@ashish_gautam/react-collapsible-sidebar';
import { Home, Settings, User, Package } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const navItems = [
    { label: 'Dashboard', icon: <Home className="h-5 w-5" />, index: 0 },
    { label: 'Settings', icon: <Settings className="h-5 w-5" />, index: 1 },
    { label: 'Profile', icon: <User className="h-5 w-5" />, index: 2, badge: 3 },
    { label: 'Products', icon: <Package className="h-5 w-5" />, index: 3 },
  ];

  return (
    <div className="flex min-h-screen">
      <CollapsibleSidebar
        navItems={navItems}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        logoText="My App"
      />
      <main className="flex-1">
        {/* Your main content here */}
      </main>
    </div>
  );
}
```

## Advanced Usage with Custom Logo

```tsx
import { Package2 } from 'lucide-react';

<CollapsibleSidebar
  navItems={navItems}
  currentPage={currentPage}
  onPageChange={setCurrentPage}
  logo={<Package2 className="h-6 w-6 text-blue-600" />}
  logoText="Awesome App"
  defaultCollapsed={false}
  activeButtonClassName="bg-blue-600 text-white shadow-lg"
  inactiveButtonClassName="text-gray-600 hover:bg-blue-50 hover:text-blue-600"
/>
```

## API Reference

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `navItems` | `NavItem[]` | Yes | - | Array of navigation items to display |
| `currentPage` | `number` | Yes | - | Index of the currently active page |
| `onPageChange` | `(index: number) => void` | Yes | - | Callback fired when a nav item is clicked |
| `logo` | `React.ReactNode` | No | - | Custom logo component to display |
| `logoText` | `string` | No | `'App Name'` | Text to display next to the logo |
| `defaultCollapsed` | `boolean` | No | `false` | Initial collapsed state of the sidebar |
| `className` | `string` | No | `''` | Additional CSS classes for the sidebar container |
| `buttonClassName` | `string` | No | `''` | Additional CSS classes for all nav buttons |
| `activeButtonClassName` | `string` | No | `'bg-blue-600 text-white'` | CSS classes for the active nav button |
| `inactiveButtonClassName` | `string` | No | `'bg-transparent border border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white'` | CSS classes for inactive nav buttons |

### Types

#### NavItem

```typescript
interface NavItem {
  label: string;        // Display text for the nav item
  icon: React.ReactNode; // Icon component (e.g., from lucide-react)
  index: number;        // Unique index for the nav item
  badge?: number;       // Optional badge count to display
}
```

#### CollapsibleSidebarProps

Full type definition is exported from the package for TypeScript users.

## Styling

The component uses Tailwind CSS classes by default. You can customize the appearance using the className props:

```tsx
<CollapsibleSidebar
  navItems={navItems}
  currentPage={currentPage}
  onPageChange={setCurrentPage}
  className="bg-gradient-to-b from-gray-900 to-gray-800"
  activeButtonClassName="bg-purple-600 text-white font-bold"
  inactiveButtonClassName="text-gray-300 hover:bg-purple-500 hover:text-white"
/>
```

## Responsive Behavior

The sidebar is hidden on mobile devices (< 768px) by default using the `hidden md:flex` classes. To make it visible on mobile, you can override the className:

```tsx
<CollapsibleSidebar
  className="flex"  // Removes the hidden class
  // ... other props
/>
```

For a better mobile experience, consider wrapping the sidebar in a drawer/sheet component.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have questions, please file an issue on the [GitHub repository](https://github.com/ashish_gautam/react-collapsible-sidebar/issues).
