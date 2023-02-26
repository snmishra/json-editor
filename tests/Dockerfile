FROM node:16-slim
# See for why this works: https://stackoverflow.com/a/65534157/2892808
ENV USER=node
ENV PATH="/home/node/.npm-global/bin:/repo/node_modules/.bin:${PATH}"
ENV NPM_CONFIG_PREFIX="/home/node/.npm-global"
USER "${USER}"
WORKDIR /repo
COPY --chown=node . .
# 👉 Configure NPM, so pkg get installed with correct credentials.
# Avoids `chmod u+x $DIR` and other workarounds.
RUN npm --global config set user "${USER}" \
  && npm --global --quiet --no-progress install \
  && npm ci && npm run build.prod && npm run build.nonmin.travis
