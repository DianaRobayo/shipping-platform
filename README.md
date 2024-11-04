# Shipping-platform

Shipping management coordinator project, created with the Next.js framework and React. Context API is used for the structure and sending of data between the components and the use of Server Side Rendering (SSR). 
The project only has two screens, one for searching for guides and the other will display the details of the guide consulted. 
To manage branches, git flow was used, allowing the creation of the dev, test and main branches, and features branches between each generated change.

## Characteristics

- The project included:
  - In the navbar the link of the Coordinadora logo was taken
  - Server Side Rendering (SSR)
  - Use of context API
  - Routing with Next
  - Allows installation on mobile devices with PWA by creating a file called manifest.json
  - Material UI and CSS were used for the design of the page
  - Performing unit tests with jest

## Technologies

- **Next.js**: React framework for creating web applications.
- **React**: JavaScript library to build user interfaces.
- **UI Material**: Component library to allow page design.
- **Jest**: JavaScript testing framework

## How to install the project?

1. **Clone the repository**:
  First, run the development server:
   ```bash
   git clone https://github.com/DianaRobayo/shipping-platform.git

2. **To run the project**:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. **To install the app on mobile**:
  A mobile download and installation icon appears on the main screen and the file name is named 'Plataforma de envios' as shown in the following image.

  ![alt text](image.png)

4. **Tests**:
  To perform the unit tests you must execute the npm run test command and it will show the execution and validation of the tests in the terminal

## Deploy on Vercel
This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
