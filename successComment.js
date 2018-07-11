/* eslint-disable no-undef */

export default `:tada: This issue has been resolved in version ${
  nextRelease.version
} :tada:\n\n
${
  releases.filter(rel => !!rel.name).length > 0
    ? `\n\nThe release is available on${
        releases.filter(rel => !!rel.name).length === 1
          ? ` ${
              releases.filter(rel => !!rel.name)[0].url
                ? `[${releases.filter(rel => !!rel.name)[0].name}](${
                    releases.filter(rel => !!rel.name)[0].url
                  })`
                : `${releases.filter(rel => !!rel.name)[0].name}`
            }`
          : `:\n${releases
              .filter(release => !!release.name)
              .map(
                releaseInfo =>
                  `- ${
                    releaseInfo.url
                      ? `[${releaseInfo.name}](${releaseInfo.url})`
                      : `${releaseInfo.name}`
                  }`,
              )
              .join('\n')}`
      }`
    : ''
}`;

/* eslint-disable-next-line */
(":tada: This issue has been resolved in version ${nextRelease.version} :tada:\n\n${releases.filter(rel =>!!rel.name).length > 0 ? `\n\nThe release is available on${releases.filter(rel => !!rel.name).length === 1 ? ` ${releases.filter(rel => !!rel.name)[0].url ? `[${releases.filter(rel => !!rel.name)[0].name}](${releases.filter(rel => !!rel.name)[0].url})` : `${releases.filter(rel => !!rel.name)[0].name}`}` : `:\n${releases.filter(release => !!release.name).map(releaseInfo => `- ${releaseInfo.url ? `[${releaseInfo.name}](${releaseInfo.url})` : `${releaseInfo.name}`}`).join('\n')}`}`: ''}");
