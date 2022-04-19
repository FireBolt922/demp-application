SENTRY_AUTH_TOKEN=f3233bd59ffa47639bef1b3632ce3acfb29c8e5e6aee4d51b389b12be4550054
SENTRY_ORG=enerlly
SENTRY_PROJECT=frontend_staging

REACT_APP_RELEASE_VERSION=`sentry-cli releases propose-version`

setup_release: create_release upload_sourcemaps associate_commits
create_release:
    sentry-cli releases -o $(SENTRY_ORG) new -p $(SENTRY_PROJECT) $(REACT_APP_RELEASE_VERSION)

upload_sourcemaps:
    sentry-cli releases -o $(SENTRY_ORG) -p $(SENTRY_PROJECT) files $(REACT_APP_RELEASE_VERSION) \
        upload-sourcemaps --url-prefix "~/static/js" --validate build/static/js

associate_commits:
    sentry-cli releases -o $(SENTRY_ORG) -p $(SENTRY_PROJECT) set-commits --auto $(REACT_APP_RELEASE_VERSION)