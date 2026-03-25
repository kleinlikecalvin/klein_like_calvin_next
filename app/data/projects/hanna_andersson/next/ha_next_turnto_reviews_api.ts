import { Project } from "@/app/types/project_types";
import turntoSection from "@/public/images/projects/hanna_andersson/next/ha_next_turnto_reviews_api/turnto_section.png";
import turntoStarsTeaser from "@/public/images/projects/hanna_andersson/next/ha_next_turnto_reviews_api/turnto_stars_teaser.png";
import turntoSizeTeaser from "@/public/images/projects/hanna_andersson/next/ha_next_turnto_reviews_api/turnto_size_teaser.png";
import turntoModal from "@/public/images/projects/hanna_andersson/next/ha_next_turnto_reviews_api/turnto_review_modal.png";
import turntoSort from "@/public/images/projects/hanna_andersson/next/ha_next_turnto_reviews_api/turnto_sort.png";
import turntoFilter from "@/public/images/projects/hanna_andersson/next/ha_next_turnto_reviews_api/turnto_filter.png";
import turntoSearch from "@/public/images/projects/hanna_andersson/next/ha_next_turnto_reviews_api/turnto_search.png";
import turntoReviewForm from "@/public/images/projects/hanna_andersson/next/ha_next_turnto_reviews_api/turnto_review_form.png";
import turntoAddImages from "@/public/images/projects/hanna_andersson/next/ha_next_turnto_reviews_api/turnto_add_images.png";
import turntoImageUploader from "@/public/images/projects/hanna_andersson/next/ha_next_turnto_reviews_api/turnto_image_uploader.png";
import turntoUploadedImage from "@/public/images/projects/hanna_andersson/next/ha_next_turnto_reviews_api/turnto_uploaded_image.png";

export const haTurnToReviews: Project = {
  id: "haTurnToReviews",
  title: "TurnTo Reviews API",
  year: "2025",
  role: "Full Stack Software Engineer",
  skills: ["React, Next.js, Redux, Typescript, Tailwind, API"],
  resources: [
    {
      displayValue: "TurnTo Review API Documentation",
      url: "https://developers.turnto.com/index-v1.0.html#reviews",
    },
    {
      displayValue: "Redux createAsyncThunk Documentation",
      url: "https://redux-toolkit.js.org/api/createAsyncThunk",
    },
  ],
  preview: {
    blurb:
      "Architected and implemented a fully custom TurnTo Reviews integration from the ground up, owning the tech design, API architecture, and entire end-to-end user experience on the PDP.",
    thumbnail: {
      src: turntoSection.src,
      alt: "Screenshot of the reviews section on a Hanna Andersson product display page",
      height: 724,
      width: 1470,
    },
  },
  page: {
    achievements: [
      "Identified a critical gap in project planning and independently developed the full tech design.",
      "Architected and implemented a custom TurnTo Reviews API integration from scratch, replacing their out-of-the-box widget with a fully bespoke solution.",
      "Engineered a composable Redux createAsyncThunk data-fetching layer that seamlessly handles simultaneous search, filter, and sort state, enabling complex query combinations like keyword search within filtered, sorted review subsets with zero edge case failures.",
      "Built a star rating and size fit teaser above the fold that soft-scroll users to the reviews section, improving discoverability and on-page engagement",
      "Developed a reviews quick view panel surfacing aggregate rating, total review count, star breakdown, a fit scale indicator, and a customer image carousel — all driven by live API data",
      "Implemented full review querying capabilities including keyword search, multi-criteria filtering, and sort — all working in concert without conflicts.",
      "Built a multi-step write-a-review modal form capturing structured inputs such as star rating, fit, quality, age, and children, with an integrated image upload flow that supports per-image captions before returning users to the form.",
      "Implemented a deep-link review flow where email campaign links carrying star rating params and user data to auto-populate the write-a-review form on the target PDP, reducing friction for post-purchase review submission.",
      "Built a reusable image display modal triggered consistently across all review image interactions throughout the entire experience.",
      "Delivered the entire feature — from architecture through production — as a solo effort, with zero bugs reported since launch.",
    ],
  },
  images: [
    {
      src: turntoSection.src,
      alt: "Screenshot of the reviews section on a Hanna Andersson product display page",
      height: 724,
      width: 1470,
    },
    {
      src: turntoStarsTeaser.src,
      alt: "Screenshot of the star ratings teaser that scrolls users down to the reviews section on a Hanna Andersson product display page",
      height: 717,
      width: 1470,
    },
    {
      src: turntoSizeTeaser.src,
      alt: "Screenshot of the size teaser that scrolls users down to the reviews section on a Hanna Andersson product display page",
      height: 721,
      width: 1470,
    },
    {
      src: turntoModal.src,
      alt: "Screenshot of the user image display modal functionality in the reviews section on a Hanna Andersson product display page",
      height: 727,
      width: 1470,
    },
    {
      src: turntoSort.src,
      alt: "Screenshot of the sort list for the reviews section on a Hanna Andersson product display page",
      height: 728,
      width: 1470,
    },
    {
      src: turntoFilter.src,
      alt: "Screenshot of the filters list for the reviews section on a Hanna Andersson product display page",
      height: 723,
      width: 1470,
    },
    {
      src: turntoSearch.src,
      alt: "Screenshot of the search functionality in the reviews section on a Hanna Andersson product display page",
      height: 725,
      width: 1470,
    },
    {
      src: turntoReviewForm.src,
      alt: "Screenshot of the 'write a review' form on a Hanna Andersson product display page",
      height: 725,
      width: 1470,
    },
    {
      src: turntoAddImages.src,
      alt: "Screenshot of how to initiate adding images to a review in the reviews section on a Hanna Andersson product display page",
      height: 725,
      width: 1470,
    },
    {
      src: turntoImageUploader.src,
      alt: "Screenshot of adding images and captions to a review in the reviews section on a Hanna Andersson product display page",
      height: 725,
      width: 1470,
    },
    {
      src: turntoUploadedImage.src,
      alt: "Screenshot of the 'write a review' form after adding images in the reviews section on a Hanna Andersson product display page",
      height: 725,
      width: 1470,
    },
  ],
};
