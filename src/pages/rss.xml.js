import rss, {pagesGlobToRssItems} from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'Behind The Coder | Blog',
        description: 'My journey learning Programming',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`,
    });
}