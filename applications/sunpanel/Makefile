#
# Copyright (C) 2015-2016 OpenWrt.org
# Copyright (C) 2024 xiaobao@linkease.com
#
# This is free software, licensed under the GNU General Public License v3.
#

include $(TOPDIR)/rules.mk

PKG_ARCH_sunpanel:=$(ARCH)

PKG_NAME:=sunpanel
PKG_VERSION:=1.7.0
PKG_RELEASE:=8
PKG_SOURCE:=sun-panel_v$(PKG_VERSION)_linux_musl_arm64.tar.gz
PKG_SOURCE_URL:=https://github.com/hslr-s/sun-panel/releases/download/v$(PKG_VERSION)/
PKG_HASH:=41fe9abfb19117d774d25e6e20673a7b055be6c3fa17791f2296209ab14a2044
PKG_BUILD_DIR:=$(BUILD_DIR)/sun-panel_v$(PKG_VERSION)_linux_musl_arm64

PKG_BUILD_PARALLEL:=1
PKG_USE_MIPS16:=0

include $(INCLUDE_DIR)/package.mk

define Package/$(PKG_NAME)
	SECTION:=net
	CATEGORY:=Network
	SUBMENU:=Web Servers/Proxies
	TITLE:=SunPanel, NAS navigation panel.
	DEPENDS:=@(aarch64) +ubus +uci +bash  # 明确指定 aarch64 架构
	URL:=https://sun-panel-doc.enianteam.com/
endef

define Package/$(PKG_NAME)/description
  Server, NAS navigation panel, Homepage, Browser homepage.
endef

define Package/$(PKG_NAME)/conffiles
/etc/config/sunpanel
endef

define Package/$(PKG_NAME)/postinst
#!/bin/sh
if [ -z "$${IPKG_INSTROOT}" ]; then
	[ -f /etc/uci-defaults/sunpanel ] && /etc/uci-defaults/sunpanel && rm -f /etc/uci-defaults/sunpanel
	exit 0
fi
endef

define Build/Configure
endef

define Build/Compile
endef

define Package/$(PKG_NAME)/install
	$(INSTALL_DIR) $(1)/usr/sbin $(1)/etc/init.d $(1)/etc/config $(1)/usr/libexec/istorec $(1)/usr/share/sunpanel $(1)/etc/uci-defaults
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/sun-panel $(1)/usr/sbin/sunpanelbin
	$(INSTALL_BIN) ./files/sunpanel.init $(1)/etc/init.d/sunpanel
	$(CP) ./files/sunpanel_conf.lua $(1)/usr/libexec/istorec/
	$(CP) ./files/conf.temp $(1)/usr/share/sunpanel/
	$(INSTALL_CONF) ./files/sunpanel.config $(1)/etc/config/sunpanel
	$(INSTALL_BIN) ./files/sunpanel.uci-default $(1)/etc/uci-defaults/sunpanel
endef

$(eval $(call BuildPackage,$(PKG_NAME)))