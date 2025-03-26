// images.ts
export function importAllImages(r: RequireContext) {
  return r.keys().map(r);
}

const activity = importAllImages(
  require.context(
    "../assets/images/indivisible/activity",
    false,
    /\.(PNG|png|jpe?g|svg|JPG|webp|avif)$/
  )
);
const exhibition = importAllImages(
  require.context(
    "../assets/images/indivisible/exhibition",
    false,
    /\.(PNG|png|jpe?g|svg|JPG|webp|avif)$/
  )
);

const oootActivity = importAllImages(
  require.context(
    "../assets/images/on_our_own_time/activity",
    false,
    /\.(PNG|png|jpe?g|svg|JPG|webp|avif)$/
  )
);

const oootImpact = importAllImages(
  require.context(
    "../assets/images/on_our_own_time/impact",
    false,
    /\.(PNG|png|jpe?g|svg|JPG|webp|avif)$/
  )
);

const we_fight_we_win1 = importAllImages(
  require.context(
    "../assets/images/we_fight_we_win/activity",
    false,
    /\.(PNG|png|jpe?g|svg|JPG|webp|avif)$/
  )
);

const we_fight_we_win2 = importAllImages(
  require.context(
    "../assets/images/we_fight_we_win/impact",
    false,
    /\.(PNG|png|jpe?g|svg|JPG|webp|avif)$/
  )
);

const when_we_see_planes1 = importAllImages(
  require.context(
    "../assets/images/when_we_see_the_planes/first_section",
    false,
    /\.(PNG|png|jpe?g|svg|JPG|webp|avif)$/
  )
);

const when_we_see_planes2 = importAllImages(
  require.context(
    "../assets/images/when_we_see_the_planes/second_section",
    false,
    /\.(PNG|png|jpe?g|svg|JPG|webp|avif)$/
  )
);

const whistle_blowers = importAllImages(
  require.context(
    "../assets/images/whistle_blowers/activity",
    false,
    /\.(PNG|png|jpe?g|svg|JPG|webp|avif)$/
  )
);

const imprisoned1 = importAllImages(
  require.context(
    "../assets/images/in_exile_exhib/photo1",
    false,
    /\.(PNG|png|jpe?g|svg|JPG|webp|avif)$/
  )
);

const csws23_1 = importAllImages(
  require.context(
    "../assets/images/cannot_stop_2023/csws23_1",
    false,
    /\.(PNG|png|jpe?g|svg|JPG|webp|avif)$/
  )
);

const csws23_2 = importAllImages(
  require.context(
    "../assets/images/cannot_stop_2023/csws23_2",
    false,
    /\.(PNG|png|jpe?g|svg|JPG|webp|avif)$/
  )
);

const ffor1 = importAllImages(
  require.context(
    "../assets/images/fights_for_our_rights/ffor1",
    false,
    /\.(PNG|png|jpe?g|svg|JPG|webp|avif)$/
  )
);
const ffor2 = importAllImages(
  require.context(
    "../assets/images/fights_for_our_rights/ffor2",
    false,
    /\.(PNG|png|jpe?g|svg|JPG|webp|avif)$/
  )
);

const limbo1 = importAllImages(
  require.context(
    "../assets/images/limbo_collective/limbo1",
    false,
    /\.(PNG|png|jpe?g|svg|JPG|webp|avif)$/
  )
);

const limbo2 = importAllImages(
  require.context(
    "../assets/images/limbo_collective/limbo2",
    false,
    /\.(PNG|png|jpe?g|svg|JPG|webp|avif)$/
  )
);
const alco = importAllImages(
  require.context(
    "../assets/images/for_the_love_of_coming_home/artists/alco",
    false,
    /\.(PNG|png|jpe?g|svg|JPG|webp|avif)$/
  )
);

const habo = importAllImages(
  require.context(
    "../assets/images/for_the_love_of_coming_home/artists/habo",
    false,
    /\.(PNG|png|jpe?g|svg|JPG|webp|avif)$/
  )
);

const rabelluaye = importAllImages(
  require.context(
    "../assets/images/for_the_love_of_coming_home/artists/rabelluaye",
    false,
    /\.(PNG|png|jpe?g|svg|JPG|webp|avif)$/
  )
);

const morrisjohn = importAllImages(
  require.context(
    "../assets/images/for_the_love_of_coming_home/artists/morrisjohn",
    false,
    /\.(PNG|png|jpe?g|svg|JPG|webp|avif)$/
  )
);

const nukonoku = importAllImages(
  require.context(
    "../assets/images/for_the_love_of_coming_home/artists/nukonoku",
    false,
    /\.(PNG|png|jpe?g|svg|JPG|webp|avif)$/
  )
);

const noahchan = importAllImages(
  require.context(
    "../assets/images/for_the_love_of_coming_home/artists/noahchan",
    false,
    /\.(PNG|png|jpe?g|svg|JPG|webp|avif)$/
  )
);

export const activityPhotos = {
  activity: activity,
  exhibition: exhibition,
  oootActivity: oootActivity,
  oootImpact: oootImpact,
  we_fight_we_win1: we_fight_we_win1,
  we_fight_we_win2: we_fight_we_win2,
  when_we_see_planes1: when_we_see_planes1,
  when_we_see_planes2: when_we_see_planes2,
  whistle_blowers: whistle_blowers,
  imprisoned1: imprisoned1,
  csws23_1: csws23_1,
  csws23_2: csws23_2,
  ffor1: ffor1,
  ffor2: ffor2,
  limbo1: limbo1,
  limbo2: limbo2,
  alco: alco,
  habo: habo,
  rabelluaye: rabelluaye,
  morrisjohn: morrisjohn,
  nukonoku: nukonoku,
  noahchan: noahchan,
};
