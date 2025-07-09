# Contributing to BarberApp Landing Page 🤝

Thank you for your interest in contributing to BarberApp! We welcome contributions from everyone and appreciate your help in making this project better.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Contributing Guidelines](#contributing-guidelines)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Issue Guidelines](#issue-guidelines)
- [Pull Request Process](#pull-request-process)

## 📜 Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:

- **Be respectful** and inclusive to all contributors
- **Be constructive** in discussions and feedback
- **Be collaborative** and help others learn
- **Be patient** with new contributors
- **Focus on the code**, not the person

## 🚀 Getting Started

### Prerequisites

Before contributing, make sure you have:

- **Node.js** 18.0 or later
- **pnpm** (recommended) or npm
- **Git** for version control
- Basic knowledge of **React**, **Next.js**, and **TypeScript**

### First Time Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/saas-landing-page.git
   cd saas-landing-page
   ```

3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/saas-landing-page.git
   ```

4. **Install dependencies**:
   ```bash
   pnpm install
   ```

5. **Start development server**:
   ```bash
   pnpm dev
   ```

## 🛠️ Development Setup

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript checks

# Maintenance
pnpm clean        # Clean build artifacts
pnpm format       # Format code with Prettier
```

### Project Structure

```
├── app/                    # Next.js App Router pages
├── components/             # Reusable React components
│   └── ui/                # shadcn/ui components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
└── styles/                # Global styles
```

## 📝 Contributing Guidelines

### What Can You Contribute?

- 🐛 **Bug fixes** - Fix reported issues
- ✨ **New features** - Add new functionality
- 📝 **Documentation** - Improve docs and comments
- 🎨 **UI/UX improvements** - Enhance user experience
- 🌍 **Translations** - Add new languages
- ⚡ **Performance** - Optimize code and assets
- 🧪 **Tests** - Add or improve test coverage

### Before You Start

1. **Check existing issues** - Look for related work
2. **Create an issue** - Discuss your idea first
3. **Get assignment** - Wait for maintainer approval
4. **Start coding** - Begin your implementation

## 🎯 Coding Standards

### TypeScript Guidelines

```typescript
// ✅ Good - Use meaningful names
interface UserProfile {
  id: string;
  email: string;
  preferences: UserPreferences;
}

// ✅ Good - Explicit return types
function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// ✅ Good - Proper error handling
try {
  const result = await fetchUserData(userId);
  return result;
} catch (error) {
  console.error('Failed to fetch user data:', error);
  throw new Error('User data unavailable');
}
```

### React Best Practices

```tsx
// ✅ Good - Functional components with hooks
export function UserCard({ user }: UserCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Effect logic
  }, [user.id]);
  
  return (
    <div className="user-card">
      {/* Component JSX */}
    </div>
  );
}

// ✅ Good - Prop types definition
interface UserCardProps {
  user: User;
  onEdit?: (user: User) => void;
  className?: string;
}
```

### Styling Guidelines

```tsx
// ✅ Good - Tailwind CSS classes
<button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md">
  Click me
</button>

// ✅ Good - Responsive design
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Grid content */}
</div>

// ✅ Good - Dark mode support
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  {/* Content */}
</div>
```

### Internationalization

```typescript
// ✅ Good - Translation structure
const translations = {
  es: {
    welcome: "Bienvenido",
    description: "Esta es una descripción"
  },
  en: {
    welcome: "Welcome",
    description: "This is a description"
  }
};

// ✅ Good - Using translations
function WelcomeMessage({ language }: { language: 'es' | 'en' }) {
  const t = translations[language];
  return <h1>{t.welcome}</h1>;
}
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Writing Tests

```typescript
// Component test example
import { render, screen } from '@testing-library/react';
import { UserCard } from './UserCard';

describe('UserCard', () => {
  it('displays user information correctly', () => {
    const mockUser = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com'
    };
    
    render(<UserCard user={mockUser} />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });
});
```

### Manual Testing Checklist

- [ ] **Desktop browsers** (Chrome, Firefox, Safari, Edge)
- [ ] **Mobile devices** (iOS Safari, Android Chrome)
- [ ] **Responsive design** at different screen sizes
- [ ] **Dark/light mode** switching
- [ ] **Language switching** functionality
- [ ] **Keyboard navigation** and accessibility
- [ ] **Form validation** and error handling

## 📤 Submitting Changes

### Commit Message Format

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation only changes
- `style:` - Code style changes (formatting, semicolons, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

**Examples:**
```bash
git commit -m "feat: add dark mode toggle to header"
git commit -m "fix: resolve mobile menu not closing on navigation"
git commit -m "docs: update installation instructions"
git commit -m "style: format code with prettier"
```

### Branch Naming

Use descriptive branch names:

```bash
# Feature branches
feature/add-dark-mode
feature/user-authentication

# Bug fix branches
fix/mobile-menu-issue
fix/form-validation-error

# Documentation branches
docs/update-readme
docs/add-api-documentation
```

## 🐛 Issue Guidelines

### Before Creating an Issue

1. **Search existing issues** to avoid duplicates
2. **Use the latest version** to confirm the issue exists
3. **Gather information** about your environment

### Issue Types

#### 🐛 Bug Report
Include:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots/videos if applicable
- Browser and device information
- Console errors (if any)

#### ✨ Feature Request
Include:
- Clear description of the feature
- Use cases and benefits
- Proposed implementation (if any)
- Alternative solutions considered

#### 📝 Documentation
Include:
- What documentation needs improvement
- Specific sections or pages affected
- Proposed changes or additions

## 🔄 Pull Request Process

### Before Submitting

1. **Update from upstream**:
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** following the coding standards

4. **Test your changes** thoroughly

5. **Commit your changes** with conventional commit messages

6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

### Pull Request Requirements

- [ ] **Descriptive title** and description
- [ ] **Link to related issue** (if applicable)
- [ ] **Tests added/updated** for new functionality
- [ ] **Documentation updated** if needed
- [ ] **No breaking changes** (or clearly documented)
- [ ] **Screenshots/videos** for UI changes
- [ ] **Accessibility considerations** addressed
- [ ] **Mobile responsiveness** verified

### Review Process

1. **Automated checks** must pass (linting, tests, build)
2. **Code review** by maintainers
3. **Testing verification** by reviewers
4. **Final approval** and merge

### After Your PR is Merged

1. **Delete your feature branch**:
   ```bash
   git branch -d feature/your-feature-name
   git push origin --delete feature/your-feature-name
   ```

2. **Update your main branch**:
   ```bash
   git checkout main
   git pull upstream main
   ```

## 🆘 Getting Help

### Community Support

- 💬 **GitHub Discussions** - Ask questions and share ideas
- 🐛 **GitHub Issues** - Report bugs and request features
- 📧 **Email** - contact@barberapp.com for sensitive matters

### Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)

## 🎉 Recognition

Contributors will be recognized in:

- 📝 **CONTRIBUTORS.md** file
- 🎖️ **GitHub contributors section**
- 📢 **Release notes** for significant contributions
- 🏆 **Project README** for major contributors

Thank you for contributing to BarberApp! 🙏

---

**Questions?** Feel free to reach out through GitHub Issues or contact@barberapp.com 