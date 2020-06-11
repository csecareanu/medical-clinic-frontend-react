1. Airbnb React/JSX Style Guide: https://github.com/airbnb/javascript/tree/master/react
2. Google JavaScript Style Guide: https://google.github.io/styleguide/jsguide.html
---
3. How to Write Doc Comments for the Javadoc Tool: https://www.oracle.com/technetwork/java/javase/documentation/index-137868.html#styleguide
4. Getting Started with JSDoc 3: https://jsdoc.app/index.html
5. Higher-Order Components: https://reactjs.org/docs/higher-order-components.html
---
6. Enums in Javascript: https://stijndewitt.com/2014/01/26/enums-in-javascript/
---
7. CSS Naming Conventions: https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/
8. A comprehensive guide to using BEM with React: https://medium.com/trabe/a-comprehensive-guide-to-using-bem-with-react-14d00c199e0d
9. Multiple CSS classes in React: https://programmingwithmosh.com/react/multiple-css-classes-react/
---
10. Flexbox: https://internetingishard.com/html-and-css/flexbox/
11. Understanding Flexbox: Everything you need to know: https://www.freecodecamp.org/news/understanding-flexbox-everything-you-need-to-know-b4013d4dc9af/
---
12. How to Section Your HTML: https://css-tricks.com/how-to-section-your-html/
---
13. Optimal file structure for React applications: https://medium.com/@Charles_Stover/optimal-file-structure-for-react-applications-f3e35ad0a145
14. How to structure your files in a large React application — the solution: https://medium.com/@damusnet/how-to-structure-your-files-in-a-large-react-application-the-solution-99389c64985e
15. Structuring projects and naming components in React: https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76
16. React components naming convention: https://medium.com/@wittydeveloper/react-components-naming-convention-%EF%B8%8F-b50303551505
---
17. XSTATE A state transition which defines what the next state is, given the current state and event: https://xstate.js.org/docs/guides/transitions.html#machine-transition-method
--


structura fisiere:
   - daca un folder defineste o componenta atunci incepe cu litera mare
   - daca un folder contine alte componente atunci componetele folosite in comun sunt puse intr-un folder "shared" (e.g: pages -> clinc -> ClinicAboutPage, ClinicContactPage; pages -> shared -> NotificationMessage)
   - folder-ul shared apare doar in folder-ele ce nu sunt componente

-
View 
    - a view will not navigate to another page
    - will not import data from a container

Controller
Container

Display
Display components are only concerned with how things look. Generally, they should have the following characteristics:
Stateless — state is should be handled by a higher-level component and passed down through props
Callbacks should be passed down through props
Contain their own styles
“Pure” functions — given the same data (props), they’ll always return the same result
Container
The container component is concerned about providing the correct data and behaviors (callbacks) to the display component. 

Containers know about data, it’s shape and where it comes from. They know details about how the things work or the so called business logic
In order to use the presentational and creation pattern: 
View component: only display a rendering of data (no API calls or internal actions)
Button component: only display a actionable view
Connect component: legacy connect components
forms components: Input , Upload , etc …

From Presentational and Container Components by Dan Abramov: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

- 

Codul ce foloseste starea aplicatiei (UIStateContext) ar trebui izolat in cat mai putine containere. 
Ca si exemplu: LanguageToolbarItem si SideDrawerToggleButton nu au fiecare cate un container. Ele primesc callback din 
Daca complexitatea unui container creste atunci:
    - sparge container-ul in mai multe containere in functie de functionalitate
 
 Daca un view este folosit in mai multe containere, iar functionaliatea view-ului este 
 intr-un container, atunci muta functionalitatea din container in view (creeate container)
 pentru view. In cazul in care noul container (al view-ului) trebuie sa modifice diferit
 starea aplicatiei, atunci adauga parametrii in view incat sa poti face ambele lucruri in
 container-ul view-ului.

Chiar daca este bine sa folosim cat mai putine container-e, iar logica de container dintr-o componenta sa o mutam in jos spre un alt container parinte, trebuie totusi pastrat un echilibru si sa nu aglomeram container-ul parinte, sa il punem sa faca multe lucruri pe care apoi sa le transimta care copiii copiilor.

ex: UserAuthenticationContaier (care este o fereastra modala) are copii pe LoginExistingAccount si CreatePatientAccount.
Ambele componente copil ar putea fi simple view-uri iar parintele sa se ocupe de procesul de logare si cel de create de cont nou.
Insa LoginExistingAccount si CreatePatientAccount pot fi folosite si de alt container care va trebui sa implemtenteze si el functionalitatea. 
Atunci putem muta functionaliteata in containere create pentru LoginExistingAccount si CreatePatientAccount si prin parametrii putem modifica comportamentul containerelor nou create (adica sa logeze user-ul pe succes sau sa ataseze un pacient la user-ul medic deja logat)
In cazul asta partea neplacta este ca accesam starea aplicatiei din multe componente mici.

Presentational components:
* Are concerned with how things look.
* May contain both presentational and container components inside
* Have no dependencies on the rest of the app, such Flux as actions or stores.
* Don’t specify how the data is loaded or mutated.
* Receive data and callbacks exclusively via props.
* Rarely have their own state (when they do, it’s UI state rather than data).
* Examples: Page, Sidebar, Story, UserInfo, List.

Container components:
* Are concerned with how things work.
* May contain both presentational and container components inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles.
* Provide the data and behavior to presentational or other container components.
* Call Flux actions and provide these as callbacks to the presentational components.
* Are often stateful, as they tend to serve as data sources.
* Are usually generated using higher order components such as connect() from React Redux, createContainer() from Relay, or Container.create() from Flux Utils, rather than written by hand.
* Examples: UserPage, FollowersSidebar, StoryContainer, FollowedUserList.


Component is part of the React API. ... Container is an informal term for a React component that is connect -ed to a redux store. Containers receive Redux state updates and dispatch actions, and they usually don't render DOM elements; they delegate rendering to presentational child components.
```js

// Adauga  proprietati la o componenta

/**
 * By default NavItemButton does not any CSS attached. 
 * Adding CSS from the imported @param classesMenu.
 */
const NavItemButtonCSS = withProps(NavItemButton, 
    {
        styleItem: classesMenu.MenuItem, 
        styleText: classesMenu.MenuText, 
        styleTextActive: classesMenu.Active
    });

/* Adds the specified 'newProps' properties to 'WrappedComponent'  instance */
const withProps = (WrappedComponent, newProps) => {
    return props => (
        <WrappedComponent {...props} {...newProps} />
    );
};

export default withProps;
```


- In React, sharing state is accomplished by moving it up to the closest common ancestor. This is called “lifting state up”. 
We can see that in UserEntryElement where there is no local state. 
The persistent information was moved in the parent component instead.
