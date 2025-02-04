# Onboarding - Irfanul Islam Portfolio site

This site is created by Shamim Hossain who is a full-stack developer and a tech enthusiast currently working as frontend lead @secureship inc. He loves to build products that help people to solve their problems. He is also a big fan of open-source and loves to contribute to open-source projects. So if you want to build your dream product faster with industry-standard tools and best practices then you are in the right place.

Sveltekit is used to build this site. It is a great framework to build static sites and server-side rendered sites. It is very fast and easy to use. You can check the documentation [Sveltekit](https://kit.svelte.dev).

Shadcn-svelte is used as the component library. It is a great library to build beautiful sites with minimal effort. You can check the documentation [Shadcn Svelte](https://shadcn-svelte.com/).

Tailwind CSS is used as the utility-first CSS framework. It is very easy to use and very powerful. You can check the documentation [Tailwind CSS](https://tailwindcss.com/).

## Developing

Rename `.env-example` to `.env` or `.env.local` then update the values.

Install dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Customization

You can customize the site by updating the `src/lib/i18n/en/index.ts` file. This is your localization file, you can update the values to your own. See some examples how they are accessed in the components.

If you are confident with Sveltekit, you can go crazy and update the components as you like. However, I would recommend you to keep the structure as it is if you are not familiar with coding that much yet.

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Vercel deployment

[Check here](https://vercel.com/guides/how-can-i-use-bitbucket-pipelines-with-vercel#configuring-bitbucket-pipelines-for-vercel)
