<template>
  <div class="">
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title is-1">PrismDB</h1>
          <p>
            PrismDB はプリティーシリーズの情報をまとめるプラットフォームです．
            同人活動の一環として行われています．
          </p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="content container">
        <h3 class="title is-3">Linked Open Data</h3>
        <p>PrismDBはデータをLOD (Linked Open Data)として公開しています．</p>
        <h4 class="title is-4">SPARQLエンドポイント</h4>
        <p>
          <a href="/sparql">
            WebやアプリからSPARQLで検索・利用可能なエンドポイント
          </a>
        </p>
        <h4 class="title is-4">SPARQLクエリ例</h4>
        <gist
          gist-url="https://gist.github.com/takanakahiko/934f30c51e95a2bad3df666c4cd08be4"
        />
        <gist
          gist-url="https://gist.github.com/takanakahiko/2d88b5636b1b530234f0cdb86acbde00"
        />
        <h4 class="title is-4">各種RDF</h4>
        <p>
          <a href="/rdfs">
            SPARQLで使用できる各種URIを公開しています
          </a>
        </p>
      </div>
    </section>
    <section class="section">
      <div class="content container">
        <h3 class="title is-3">REST API</h3>
        <p>PrismDBはデータをREST APIとして公開しています．</p>
        <p>
          <a href="https://github.com/prickathon/prismdb/tree/master/restapi">
            REST API に関するドキュメント
          </a>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import Gist from '~/components/Gist'
export default {
  components: { Gist }
}
</script>
