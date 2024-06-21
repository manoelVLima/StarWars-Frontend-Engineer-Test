# StarWars App - Frontend Engineer Test

<details>
    <summary> Read the documentation in English </summary>
This is a Frontend application built in Next.js to test the Frontend Engineer position at CloudWalk.

The application is online on the website: https://star-wars-frontend-engineer-test.vercel.app/

## Installation

First thing to do is clone the repository, so in you terminal run the following code:

```bash
git clone https://github.com/manoelVLima/StarWars-Frontend-Engineer-Test.git
cd StarWars-Frontend-Engineer-Test
```

After that you must download the project dependencies.

```bash
npm install
```

And you are free to run the Application:

```bash
npm run dev
```

You will be up on localhost:3000

If you have any problems cloning the repository, you can also download the project folder as a ZIP in the **<> Code** section and run it manually.

## How to Test

To run the tests in your terminal, run the code:

```bash
npm run dev
```

![image](https://github.com/manoelVLima/StarWars-Frontend-Engineer-Test/blob/master/public/tests.png)

I used Jest and RTL were used for testing.  

## Tech Stack

The application was built on its basis with React, using the Next.js framework.     The choice was basically because Next.js has a lot of performance potential mainly due to its features such as server-side rendering (SSR), static rendering (SSG), easy page routing and great documentation.

As mentioned before, I used Jest and RTL to perform the tests.

For styling, TailwindCSS was used, which is the standard used in Next.js (another positive point).

Talking a little about code, it was all written in Typescript. I believe that today it should be the best option, mainly to standardize the project and bring more security,

To make requests to the API, I used TanStack Query, a library for asynchronous state management and data caching in React applications. I can mention 2 positive points: better state management in HTTP requests (you no longer need to suffer with useEffect) and caching, which avoids unnecessary requests and improves page fluidity.

Another important point was building the code using the combination of ESLint + Prettier. Honestly, the best thing there is to program, in addition to avoiding a lot of headaches with code formatting, it makes your code easier for other people to see and understand.


## Improvements

Well, I'm going to mention some improvements that could be made (if I had more time), unfortunately I don't.

- Improve website pagination: unfortunately the API is a little limited and makes pagination a bit difficult. I would like to have done direct pagination, without changing pages, but this would require more requests and consequently affect the page's performance. I chose not to do it.
- Implementation of new features: I wasn't able to implement so many ideas, I had more focus on the code itself. But I have some ideas in mind that could be put into practice, for example, a dedicated page for each character or even a modal to show the characteristics of each one.
- filter robustness: The filter logic can be improved and can even reach the planets API, having a filter that integrates characters and planets. With the planets it would be really cool because it has a lot of numerical information.
</details>
## Thank you for the opportunity, I hope you like it!
