FROM php:8.1-fpm

RUN apt-get update \
    && apt-get install -y --no-install-recommends vim curl debconf subversion git apt-transport-https apt-utils \
    build-essential locales acl mailutils wget nodejs zip unzip libzip-dev \
    gnupg gnupg1 gnupg2 libpng-dev sudo zlib1g-dev libicu-dev g++
RUN docker-php-ext-configure intl
RUN docker-php-ext-install pdo intl
RUN apt-get update && \
    apt-get install -y libssl-dev netcat libxml2-dev libpq-dev && \
    pecl install apcu && \
    docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql && \
    docker-php-ext-install -j$(nproc) zip opcache intl pdo_pgsql pgsql && \
    docker-php-ext-enable apcu pdo_pgsql sodium && \
    apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
COPY php.ini /usr/local/etc/php/php.ini
COPY php-fpm-pool.conf 	/usr/local/etc/php/pool.d/www.conf

RUN curl -sSk https://getcomposer.org/installer | php -- --disable-tls && \
	mv composer.phar /usr/local/bin/composer
RUN wget https://get.symfony.com/cli/installer -O - | bash && \
mv /root/.symfony5/bin/symfony /usr/local/bin/symfony

WORKDIR /var/www

EXPOSE 9000
CMD ["php-fpm"]