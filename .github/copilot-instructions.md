# AI Agent Instructions for URL Shortener Frontend

## Project Overview
This is the Angular frontend for a URL shortener application. It uses Angular 19.2 with standalone components and follows modern Angular practices.

## Key Architecture Points
- **Standalone Components**: The app uses Angular's standalone component architecture (see `app.component.ts`)
- **Routing**: Configured via `app.routes.ts` using the standalone router configuration
- **State Management**: Uses Angular's built-in state management with services (no external state libraries)

## Development Workflows

### Local Development
1. Start the development server:
```bash
ng serve
```
Access the app at `http://localhost:4200`

### Testing
- Run unit tests (Karma): `ng test`
- Tests are co-located with components (*.spec.ts files)

### Build Process
- Development build: `ng build`
- Production build: `ng build --configuration production`
- Watch mode: `ng build --watch`

## Project Conventions
1. **File Structure**:
   - Components live in `src/app/`
   - Each component has its own directory with `.ts`, `.html`, `.css`, and `.spec.ts` files
   - Shared services and utilities go in `src/app/shared/`

2. **Component Pattern**:
   ```typescript
   @Component({
     standalone: true,
     imports: [CommonModule],
     ...
   })
   ```

3. **Routing**: Route definitions should be added to `app.routes.ts`

## Dependencies
- Angular 19.2.x core packages
- RxJS 7.8.x for reactive programming
- Karma for unit testing

## Common Operations
- Generate new component: `ng generate component my-component`
- Generate new service: `ng generate service my-service`
- Add a dependency: `npm install package-name`

## Integration Points
- Backend API endpoints should be defined in environment files
- Services should handle all HTTP communication with the backend
- Use Angular's HttpClient for API calls

## Tips for AI Agents
1. Always check `package.json` for available scripts and dependencies
2. Use Angular CLI commands for generating new components/services
3. Follow the standalone components pattern for new features
4. Ensure proper module imports in standalone components
5. Keep components focused and use services for shared logic