# Blog (grafana.com/blog) and documentation assets

This repo hosts the blog for the grafana.com website.
It's a static page generator based on Hugo.

It also hosts all images for the documentation, as well as the Dockerfile for the build image needed to deploy docs (this is not needed for blog publishing).

## Small edits

For small edits you don't need to clone and build the repo.
Instead, open the file in GitHub, edit it, and open a PR with the change.
Once the PR is merged, the change will go live on [staging.grafana.com](http://staging.grafana.com).
See [Publishing](#publishing) for instructions on how to make the change visable on [grafana.com](http://grafana.com).

## Write blog post

You don't need to install anything to write a blog post, but you won't be able to preview locally.
If you want to do that, see [Preview Locally](#preview-locally).

> **First time writers**:
>
> Make sure an author file with your name exists under `data/authors/`
> If not, create a file under your name. See `david.yaml` for an example:
>
> ```yaml
> name: David Kaltschmidt
> imgUrl: /img/about/david_kaltschmidt.jpg
> ```
>
> Then add a square-shaped headshot under `static/img/about/`. Check out some existing ones to see what is required.

1. Blog posts are added under `content/blog/`. Look for recent blog post that fits your style and duplicate it.
1. Adjust the date in the filename and the header to a possible publishing date:
   -  Feel free to pick the next available  date from [the content calendar](https://docs.google.com/spreadsheets/d/1UkU3bmwyfSm_b9INcf_t7I8s_YI8R7yja1LwOdiVVhI/edit#gid=25282085).
   -  If you want to publish sooner jump onto #marketing on Slack and ask.  We're very flexible.
1. Add a proper title.
1. Write the blog post.
1. Pick appropriate categories:
   - Try not to introduce a new category of size one - check existing categories on the blog.
   - Probably don't have too many categories: 3-4 max?
   - If the post is about company X using technology Y (Graphite, Prometheus, Kubernetes etc), the categories should include Y but not X.
   - If its a guest blog post by company X, the category should be 'guest', not the company name.
1. Commit the post (and your author files if needed) to branch and open a PR.
1. Get someone to review it.  Ask on #marketing on slack for a copy edit.

## Publishing

Merges into the master branch are automaitcally deployed to https://staging.grafana.com/blog/.

To deploy master to https://grafana.com/blog/, find the latest master workflow on https://circleci.com/gh/grafana/workflows/grafana.org/tree/master and click "approve-production".

Generally, someone from marketing will publish a blog post everyday, so as long as you post has been copy edited it will go out according to the schedule.

Don't forget to tweet out the new blog post!  Ask on #marketing if you don't have access to twitter.

## Preview Locally

To write a blog post and preview it locally, you need to install Hugo and some dependencies.

### Set up

Install the software needed to run the blog locally.
You should have to do this only once.

- Install Hugo, the static site generator

  (Note: The exact version 0.30.2 is needed only for the person doing the publishing, since recent versions break version switching of the docs site. If you plan to write blog posts only, then a recent version of hugo is fine, and may be installed via `brew install hugo`, allowing you to skip the manual install below.)

  Linux:

  ```bash
  curl -sSL https://github.com/gohugoio/hugo/releases/download/v0.30.2/hugo_0.30.2_Linux-64bit.tar.gz \
  \
    && sudo chmod 755 /usr/local/bin/hugo \
    && /usr/local/bin/hugo version
  ```

  Mac:

  ```bash
  curl -sSL https://github.com/gohugoio/hugo/releases/download/v0.30.2/hugo_0.30.2_macOS-64bit.tar.gz \
  \
    && sudo chmod 755 /usr/local/bin/hugo \
    && /usr/local/bin/hugo version
  ```

- Install nodejs, version 6 and above is fine, check with `node -v`

- Install bower, the dependency manager and grunt, the task runner

```bash
npm install -g bower
npm install -g grunt
```

### Build

To build and run the blog locally, do the following steps:

- Install dependencies if you have not used this repo in a while:

```bash
npm install
bower install
```

- Build and blog site and start a watcher for changes on modifying sass/html/md files

```bash
grunt # build it once
grunt watch
```

- In a second terminal start a webserver to serve the blog site locally on http://localhost:3002/

```bash
grunt connect
```

You should be able to see the blog site loading fine in the browser.



## Admin

### To build the Docker image for docs:

This repo includes the Dockerfile and assets to build the grafana docs.
It will include the assets from this repo and then combine them with the docs from the grafana repo.

Build the Docker image used to deploy docs:

```bash
make docs-build
```

Then continue in the grafana repo.
