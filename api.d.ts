interface Site {
  begin: string,
  site: string,
  id: string
}

interface Bangumi {
  begin: string,
  end: string,
  title: string,
  titleTranslate: { 'zh-Hans': string[] },
  sites: Site[]
}
